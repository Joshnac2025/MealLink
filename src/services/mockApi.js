
// Mock API service using localStorage
// This replaces the Axios instance and backend calls

const STORAGE_KEYS = {
    USERS: 'meallink_users',
    DONATIONS: 'meallink_donations',
    EVENTS: 'meallink_events',
    CURRENT_USER: 'meallink_current_user'
};

// Helper to get data safely
const getStorage = (key) => {
    try {
        const data = localStorage.getItem(key);
        return data ? JSON.parse(data) : [];
    } catch (e) {
        console.error(`Error reading ${key} from localStorage`, e);
        return [];
    }
};

// Helper to set data safely
const setStorage = (key, data) => {
    try {
        localStorage.setItem(key, JSON.stringify(data));
    } catch (e) {
        console.error(`Error writing ${key} to localStorage`, e);
    }
};

// Initialize default data if empty
const initializeData = () => {
    try {
        const users = getStorage(STORAGE_KEYS.USERS);
        if (users.length === 0) {
            const defaultAdmin = {
                id: 1,
                username: 'admin',
                password: 'adminpassword', // In a real app, this should be hashed
                role: 'admin'
            };
            setStorage(STORAGE_KEYS.USERS, [defaultAdmin]);
            console.log('Initialized default admin user');
        }
    } catch (e) {
        console.error('Error initializing data', e);
    }
};

initializeData();

// Mock response object
const mockResponse = (data, status = 200) => {
    return Promise.resolve({
        data,
        status,
        statusText: 'OK',
        headers: {},
        config: {},
    });
};

const mockError = (message, status = 400) => {
    return Promise.reject({
        response: {
            data: { error: message },
            status,
            statusText: 'Error',
        }
    });
};

const api = {
    get: async (url) => {
        console.log(`Mock GET: ${url}`);
        await new Promise(resolve => setTimeout(resolve, 500)); // Simulate network delay

        if (url === '/admin/admin/overview') {
            const users = getStorage(STORAGE_KEYS.USERS);
            const donations = getStorage(STORAGE_KEYS.DONATIONS);
            const orphanages = users.filter(u => u.role === 'orphanage');
            const donors = users.filter(u => u.role === 'donor');

            const pendingDonations = donations.filter(d => d.status === 'Pending').length;
            const acceptedDonations = donations.filter(d => d.status === 'Accepted').length;

            return mockResponse({
                total_donors: donors.length,
                total_orphanages: orphanages.length,
                donations_summary: {
                    Pending: pendingDonations,
                    Accepted: acceptedDonations
                }
            });
        }

        if (url === '/events/admin/pending_event_donations') {
            const events = getStorage(STORAGE_KEYS.EVENTS);
            const pendingEvents = events.filter(e => e.status === 'Pending');
            return mockResponse(pendingEvents);
        }

        if (url === '/orphanages/orphanage/view_donations') {
            const donations = getStorage(STORAGE_KEYS.DONATIONS);
            const pendingDonations = donations.filter(d => d.status === 'Pending');
            return mockResponse({ donations: pendingDonations });
        }

        if (url === '/events/event_donations') {
            const events = getStorage(STORAGE_KEYS.EVENTS);
            return mockResponse(events);
        }

        return mockError('Endpoint not found', 404);
    },

    post: async (url, data) => {
        console.log(`Mock POST: ${url}`, data);
        await new Promise(resolve => setTimeout(resolve, 500));

        // Auth
        if (url === '/admin/admin/login') {
            const users = getStorage(STORAGE_KEYS.USERS);
            const admin = users.find(u => u.username === data.username && u.password === data.password && u.role === 'admin');
            if (admin) {
                // Save current user details to localStorage
                const userProfile = {
                    id: admin.id,
                    username: admin.username,
                    role: admin.role,
                    loginTime: new Date().toISOString()
                };
                localStorage.setItem(STORAGE_KEYS.CURRENT_USER, JSON.stringify(userProfile));
                console.log('Admin logged in:', userProfile);
                return mockResponse({ message: 'Login successful', token: 'mock-token', user: userProfile });
            }
            return mockError('Invalid credentials', 401);
        }


        if (url === '/orphanages/orphanage/login') {
            const users = getStorage(STORAGE_KEYS.USERS);
            console.log('All users in storage:', users);
            console.log('Looking for orphanage with email:', data.email);

            const user = users.find(u => u.email === data.email && u.password === data.password && u.role === 'orphanage');

            if (!user) {
                const emailMatch = users.find(u => u.email === data.email);
                if (emailMatch) {
                    console.log('Email found but password mismatch. Stored:', emailMatch.password, 'Entered:', data.password);
                } else {
                    console.log('No user found with email:', data.email);
                }
            }

            if (user) {
                // Save current user details to localStorage
                const userProfile = {
                    id: user.id,
                    name: user.name,
                    email: user.email,
                    phone: user.phone,
                    address: user.address,
                    role: user.role,
                    loginTime: new Date().toISOString()
                };
                localStorage.setItem(STORAGE_KEYS.CURRENT_USER, JSON.stringify(userProfile));
                console.log('Orphanage logged in:', userProfile);
                return mockResponse({ message: 'Login successful', token: 'mock-token', user: userProfile });
            }
            return mockError('Invalid credentials', 401);
        }

        // Donor login (if needed in future)
        if (url === '/donors/donor/login') {
            const users = getStorage(STORAGE_KEYS.USERS);
            console.log('All users in storage:', users);
            console.log('Looking for donor with email:', data.email);

            const user = users.find(u => u.email === data.email && u.password === data.password && u.role === 'donor');

            if (!user) {
                const emailMatch = users.find(u => u.email === data.email);
                if (emailMatch) {
                    console.log('Email found but password mismatch. Stored:', emailMatch.password, 'Entered:', data.password);
                } else {
                    console.log('No user found with email:', data.email);
                }
            }

            if (user) {
                // Save current user details to localStorage
                const userProfile = {
                    id: user.id,
                    name: user.name,
                    email: user.email,
                    phone: user.phone,
                    aadhar_number: user.aadhar_number,
                    role: user.role,
                    loginTime: new Date().toISOString()
                };
                localStorage.setItem(STORAGE_KEYS.CURRENT_USER, JSON.stringify(userProfile));
                console.log('Donor logged in:', userProfile);
                return mockResponse({ message: 'Login successful', token: 'mock-token', user: userProfile });
            }
            return mockError('Invalid credentials', 401);
        }


        if (url === '/donors/donor/register') {
            console.log('📝 Donor registration request:', data);
            const users = getStorage(STORAGE_KEYS.USERS);
            console.log('Current users before registration:', users);

            if (users.find(u => u.email === data.email)) {
                console.log('❌ Email already exists:', data.email);
                return mockError('Email already exists');
            }

            const newUser = { ...data, id: Date.now(), role: 'donor' };
            users.push(newUser);
            console.log('✅ New donor user created:', newUser);

            setStorage(STORAGE_KEYS.USERS, users);
            console.log('💾 Saved to localStorage. Total users now:', users.length);

            // Verify it was saved
            const savedUsers = getStorage(STORAGE_KEYS.USERS);
            console.log('✅ Verification - Users in storage:', savedUsers);

            return mockResponse({ message: 'Registration successful' }, 201);
        }

        if (url === '/orphanages/orphanage/register') {
            console.log('📝 Orphanage registration request:', data);
            const users = getStorage(STORAGE_KEYS.USERS);
            console.log('Current users before registration:', users);

            if (users.find(u => u.email === data.email)) {
                console.log('❌ Email already exists:', data.email);
                return mockError('Email already exists');
            }

            const newUser = { ...data, id: Date.now(), role: 'orphanage' };
            users.push(newUser);
            console.log('✅ New orphanage user created:', newUser);

            setStorage(STORAGE_KEYS.USERS, users);
            console.log('💾 Saved to localStorage. Total users now:', users.length);

            // Verify it was saved
            const savedUsers = getStorage(STORAGE_KEYS.USERS);
            console.log('✅ Verification - Users in storage:', savedUsers);

            return mockResponse({ message: 'Registration successful' }, 201);
        }

        // Donor
        if (url === '/donors/donor/add_donation') {
            const donations = getStorage(STORAGE_KEYS.DONATIONS);
            const newDonation = {
                ...data,
                id: Date.now(),
                status: 'Pending',
                date: new Date().toISOString().split('T')[0]
            };
            donations.push(newDonation);
            setStorage(STORAGE_KEYS.DONATIONS, donations);
            return mockResponse({ message: 'Donation added' }, 201);
        }

        // Orphanage
        if (url === '/orphanages/orphanage/accept_donation') {
            const donations = getStorage(STORAGE_KEYS.DONATIONS);
            const donationIndex = donations.findIndex(d => d.id === data.donation_id);
            if (donationIndex !== -1) {
                donations[donationIndex].status = 'Accepted';
                donations[donationIndex].accepted_by = data.orphanage_email;
                setStorage(STORAGE_KEYS.DONATIONS, donations);
                return mockResponse({ message: 'Donation accepted' });
            }
            return mockError('Donation not found', 404);
        }

        if (url === '/orphanage/request') {
            // Just log it for now, maybe store in a requests list if needed
            console.log('Orphanage request:', data);
            return mockResponse({ message: 'Request submitted' });
        }

        // Events
        if (url === '/events/event_donation') {
            const events = getStorage(STORAGE_KEYS.EVENTS);
            const newEvent = {
                ...data,
                id: Date.now(),
                status: 'Pending',
                event_name: `Event by ${data.donor_name}`, // Construct a name
                description: data.message
            };
            events.push(newEvent);
            setStorage(STORAGE_KEYS.EVENTS, events);
            return mockResponse({ message: 'Event submitted' }, 201);
        }

        return mockError('Endpoint not found', 404);
    },

    put: async (url, data) => {
        console.log(`Mock PUT: ${url}`, data);
        await new Promise(resolve => setTimeout(resolve, 500));

        if (url.startsWith('/events/admin/event_donations/')) {
            const id = parseInt(url.split('/').pop());
            const events = getStorage(STORAGE_KEYS.EVENTS);
            const eventIndex = events.findIndex(e => e.id === id);

            if (eventIndex !== -1) {
                events[eventIndex].status = data.approval_status;
                setStorage(STORAGE_KEYS.EVENTS, events);
                return mockResponse({ message: 'Event updated' });
            }
            return mockError('Event not found', 404);
        }

        return mockError('Endpoint not found', 404);
    },

    delete: async (url) => {
        return mockError('Endpoint not found', 404);
    }
};

// Utility functions for user management
export const getCurrentUser = () => {
    try {
        const userData = localStorage.getItem(STORAGE_KEYS.CURRENT_USER);
        return userData ? JSON.parse(userData) : null;
    } catch (e) {
        console.error('Error getting current user', e);
        return null;
    }
};

export const logout = () => {
    localStorage.removeItem(STORAGE_KEYS.CURRENT_USER);
    localStorage.removeItem('user_type');
    localStorage.removeItem('user_email');
    localStorage.removeItem('user_username');
    console.log('User logged out');
};

export const isLoggedIn = () => {
    return getCurrentUser() !== null;
};

export const getUserRole = () => {
    const user = getCurrentUser();
    return user ? user.role : null;
};

export default api;

