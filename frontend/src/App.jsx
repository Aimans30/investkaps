import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './App.css';
import { AuthProvider } from './context/AuthContext';
import { ClerkProvider } from '@clerk/clerk-react';

// Components
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';
import AdminRoute from './components/guards/AdminRoute'; // Admin route guard
import PWAInstallPrompt from './components/PWAInstallPrompt/PWAInstallPrompt';

// Pages
import Home from './pages/Home/Home';
import About from './pages/About/About';
import ServicesPage from './pages/Services/Services';
import Contact from './pages/Contact/Contact';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import Dashboard from './pages/Dashboard/Dashboard';
import ESignForm from './pages/AadhaarESign/ESignForm';
import Pricing from './pages/Pricing/Pricing';
import UserRecommendations from './pages/Dashboard/UserRecommendations';
import PaymentSuccess from './pages/Payment/PaymentSuccess';
import AdminDashboard from './pages/Admin/AdminDashboard';
import AdminSetup from './pages/Setup/AdminSetup';
import AdminCheck from './pages/AdminCheck';
import Profile from './pages/Profile/Profile';

// Layout component that conditionally renders the navbar
const AppLayout = ({ children, scrolled }) => {
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith('/admin');
  const isHomePage = location.pathname === '/';
  const isLoginPage = location.pathname === '/login';
  const isRegisterPage = location.pathname === '/register';
  
  // Add or remove page-specific classes on body based on current route
  useEffect(() => {
    // Remove all page classes first
    document.body.classList.remove('is-home', 'is-login', 'is-register');
    
    // Add appropriate class
    if (isHomePage) {
      document.body.classList.add('is-home');
    } else if (isLoginPage) {
      document.body.classList.add('is-login');
    } else if (isRegisterPage) {
      document.body.classList.add('is-register');
    }
    
    return () => {
      document.body.classList.remove('is-home', 'is-login', 'is-register');
    };
  }, [isHomePage, isLoginPage, isRegisterPage]);
  
  return (
    <div className={isAdminRoute ? 'app-admin' : 'app'}>
      {!isAdminRoute && <Navbar scrolled={scrolled} />}
      <main className={`main-content ${isAdminRoute ? 'admin-content' : ''}`}>
        {children}
      </main>
      {!isAdminRoute && <Footer />}
    </div>
  );
};

function App() {
  const [scrolled, setScrolled] = useState(false);
  const clerkPubKey = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  if (!clerkPubKey) {
    return <div>Missing Clerk Publishable Key</div>;
  }

  return (
    <ClerkProvider
      publishableKey={clerkPubKey}
      navigate={(to) => (window.location.href = to)}
      telemetry={false}
      appearance={{
        layout: {
          logoPlacement: 'inside',
          socialButtonsVariant: 'iconButton',
          logoImageUrl: '/logo.png',
        },
        variables: { colorPrimary: '#0b73ff' },
      }}
    >
      <AuthProvider>
        <Router>
          <Routes>
            <Route 
              path="/*" 
              element={
                <AppLayout scrolled={scrolled}>
                  <Routes>
                    {/* Public routes */}
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/services" element={<ServicesPage />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/setup/admin" element={<AdminSetup />} />

                    {/* Protected routes */}
                    <Route
                      path="/dashboard"
                      element={
                        <ProtectedRoute>
                          <Dashboard />
                        </ProtectedRoute>
                      }
                    />
                    <Route
                      path="/esign"
                      element={
                        <ProtectedRoute>
                          <ESignForm />
                        </ProtectedRoute>
                      }
                    />
                    <Route
                      path="/pricing"
                      element={
                        <ProtectedRoute>
                          <Pricing />
                        </ProtectedRoute>
                      }
                    />
                    <Route
                      path="/recommendations"
                      element={
                        <ProtectedRoute>
                          <UserRecommendations />
                        </ProtectedRoute>
                      }
                    />
                    <Route
                      path="/admin-check"
                      element={
                        <ProtectedRoute>
                          <AdminCheck />
                        </ProtectedRoute>
                      }
                    />
                    <Route
                      path="/profile"
                      element={
                        <ProtectedRoute>
                          <Profile />
                        </ProtectedRoute>
                      }
                    />
                    <Route
                      path="/payment-success"
                      element={
                        <ProtectedRoute>
                          <PaymentSuccess />
                        </ProtectedRoute>
                      }
                    />

                    {/* Admin routes */}
                    <Route
                      path="/admin/*"
                      element={
                        <AdminRoute>
                          <AdminDashboard />
                        </AdminRoute>
                      }
                    />

                    {/* 404 fallback */}
                    <Route
                      path="*"
                      element={
                        <div className="not-found">
                          <h1>Page Not Found</h1>
                        </div>
                      }
                    />
                  </Routes>
                </AppLayout>
              } 
            />
          </Routes>
          <PWAInstallPrompt />
        </Router>
      </AuthProvider>
    </ClerkProvider>
  );
}

export default App;