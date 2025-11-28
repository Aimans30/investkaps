# 🔍 Code Audit Summary - InvestKaps

**Date:** November 27, 2025
**Scope:** Source code files only (no env or package.json changes)

---

## 📊 Audit Results

### ✅ GOOD NEWS
- ✅ No hardcoded API keys or secrets in code
- ✅ No exposed passwords in source files
- ✅ Proper use of environment variables
- ✅ Backend code is relatively clean

### ⚠️ ISSUES FOUND

---

## 1. Console.log Statements (Production Risk)

### Frontend (High Priority)
**Total:** 50+ console statements found

#### Critical Files:
- `Dashboard.jsx` - 10+ console.log/error statements
- `Profile.jsx` - 3 console statements
- `Pricing.jsx` - 2 console.error statements
- `AdminSetup.jsx` - 2 console.error statements
- `UserManagement.jsx` - Multiple console.error
- `PaymentApproval.jsx` - Multiple console.error
- `StockRecommendations.jsx` - Multiple console.error

**Example locations:**
```javascript
// Dashboard.jsx line 1075
console.log('Checking status for documentId:', activeDocumentId);

// Dashboard.jsx line 1087
console.log('Checking status for requestId:', requestId);

// Dashboard.jsx line 1100
console.log('Leegality status response:', result);

// Profile.jsx line 30
console.log('Could not fetch by clerkId, trying email...');
```

### Backend (Medium Priority)
**Total:** 30+ console statements

#### Files with console.log:
- `server.js` - Request logging (line 60)
- `utils/leegality.js` - Debug logs (lines 115-117)
- `routes/kycRoutes.js` - Auth debug logs (lines 19, 26, 28, 33, 36, 42)
- `controllers/subscriptionService.js` - Environment debug (lines 14-15)
- `scripts/checkUserSubscription.js` - CLI tool (acceptable)

**Example:**
```javascript
// utils/leegality.js lines 115-117
console.log('=== LEEGALITY FULL RESPONSE ===');
console.log(JSON.stringify(resp.data, null, 2));
console.log('=== END RESPONSE ===');
```

---

## 2. TODO/FIXME Comments

### Critical TODOs:

#### `ESignForm.jsx` (Line 11)
```javascript
const LEEGALITY_PROFILE_ID = 'TNbM5NR'; // TODO: Replace with Simple Sign profile ID
```
**Issue:** Using template workflow instead of simple sign profile
**Action:** Update Leegality profile ID

#### `auth.js` (Line 88)
```javascript
// TODO: Implement Clerk webhook signature verification before production
```
**Issue:** Webhook security not implemented
**Action:** Add signature verification

#### `subscriptionService.js` (Lines 14-15)
```javascript
// Debug log for environment variables
console.log('Razorpay Key ID available:', !!process.env.RAZORPAY_KEY_ID);
console.log('Razorpay Key Secret available:', !!process.env.RAZORPAY_KEY_SECRET);
```
**Issue:** Environment debug logs in production code
**Action:** Remove these logs

---

## 3. Security Concerns

### High Priority:

#### A. Webhook Signature Verification Missing
**File:** `backend/middleware/auth.js`
**Line:** 85-90
```javascript
// SECURITY WARNING: Webhook signature verification is disabled
// TODO: Implement Clerk webhook signature verification
```
**Risk:** Webhooks can be spoofed
**Fix:** Implement Clerk webhook signature verification

#### B. Debug Logs Exposing Data
**Files:** Multiple
**Risk:** Sensitive data in browser/server console
**Examples:**
- Leegality API responses logged in full
- User clerk IDs logged
- Request/response data logged

### Medium Priority:

#### C. Deprecated Function Warning
**File:** `Dashboard.jsx` line 273
```javascript
console.warn('completeStep is deprecated, use direct state updates instead');
```
**Action:** Remove deprecated function or the warning

---

## 4. Code Quality Issues

### A. Large Base64 String in Code
**File:** `frontend/src/pages/AadhaarESign/base64.jsx`
**Issue:** Entire PDF as base64 string in source code
**Size:** Very large file
**Recommendation:** Move to external file or use dynamic loading

### B. Redundant Error Handling
**Pattern found in multiple API service files:**
```javascript
catch (err) {
  console.error('Error:', err);
  throw new Error(message);
}
```
**Issue:** Console.error before throwing
**Better:** Use error tracking service

---

## 5. Code Duplications

### API Error Handling Pattern
**Files:** All service files in `frontend/src/services/`
**Pattern:**
```javascript
try {
  const res = await api.get('/endpoint');
  return res.data;
} catch (err) {
  const message = err.response?.data?.error || 'Error message';
  console.error('Error:', message);
  throw new Error(message);
}
```
**Recommendation:** Create a centralized error handler utility

### Example Refactor:
```javascript
// utils/errorHandler.js
export const handleAPIError = (err, defaultMessage) => {
  const message = err.response?.data?.error || defaultMessage;
  // In production, send to error tracking
  if (process.env.NODE_ENV === 'production') {
    // Sentry.captureException(err);
  } else {
    console.error('API Error:', message, err);
  }
  throw new Error(message);
};

// Usage in services
try {
  const res = await api.get('/endpoint');
  return res.data;
} catch (err) {
  handleAPIError(err, 'Failed to fetch data');
}
```

---

## 📋 RECOMMENDED ACTIONS

### Immediate (Before Production):

1. **Remove Debug Console.logs**
   - [ ] Remove all `console.log` from Dashboard.jsx
   - [ ] Remove all `console.log` from Profile.jsx
   - [ ] Remove debug logs from utils/leegality.js
   - [ ] Remove environment debug from subscriptionService.js
   - [ ] Remove auth debug logs from kycRoutes.js

2. **Keep Only Error Logs**
   - [ ] Keep `console.error` for critical errors
   - [ ] Consider replacing with error tracking service

3. **Fix Security Issues**
   - [ ] Implement Clerk webhook signature verification
   - [ ] Update Leegality profile ID to Simple Sign
   - [ ] Review all TODO comments

### Short Term:

4. **Refactor Error Handling**
   - [ ] Create centralized error handler
   - [ ] Remove duplicate error handling code
   - [ ] Implement proper error tracking (Sentry/LogRocket)

5. **Code Cleanup**
   - [ ] Remove deprecated functions
   - [ ] Clean up commented code
   - [ ] Remove unused imports

### Long Term:

6. **Implement Proper Logging**
   ```javascript
   // Use environment-aware logging
   const logger = {
     info: (msg, data) => {
       if (process.env.NODE_ENV !== 'production') {
         console.log(msg, data);
       }
     },
     error: (msg, err) => {
       if (process.env.NODE_ENV === 'production') {
         // Send to error tracking
       } else {
         console.error(msg, err);
       }
     }
   };
   ```

7. **Add Error Tracking**
   - Integrate Sentry or similar service
   - Track errors in production
   - Monitor API failures

---

## 🎯 Priority Matrix

| Issue | Severity | Effort | Priority |
|-------|----------|--------|----------|
| Webhook signature verification | High | Medium | 🔴 Critical |
| Remove debug console.logs | Medium | Low | 🟡 High |
| Update Leegality profile ID | High | Low | 🟡 High |
| Centralize error handling | Low | Medium | 🟢 Medium |
| Add error tracking | Medium | Medium | 🟢 Medium |
| Clean deprecated code | Low | Low | 🟢 Low |

---

## ✅ Files That Are Clean

- All API service files (structure is good, just console.logs to remove)
- Component files (mostly clean)
- Route handlers (backend)
- Models and schemas
- Utility functions (except leegality.js)

---

## 📝 Notes

1. **Console.error vs console.log:**
   - Keep `console.error` for now (helps with debugging)
   - Remove all `console.log` and `console.warn`
   - Replace with proper error tracking in production

2. **Scripts folder:**
   - `checkUserSubscription.js` is a CLI tool
   - Console.logs are acceptable here
   - Not used in production code

3. **Base64 PDF:**
   - Consider moving to external file
   - Or load dynamically from server
   - Current approach works but not ideal

---

## 🚀 Quick Wins (Can Do Now)

1. Remove these specific console.logs:
   - Dashboard.jsx lines 1075, 1087, 1100
   - utils/leegality.js lines 115-117
   - subscriptionService.js lines 14-15
   - kycRoutes.js lines 19, 26, 28, 33, 36, 42

2. Add this to vite.config.js for production:
   ```javascript
   build: {
     minify: 'terser',
     terserOptions: {
       compress: {
         drop_console: true, // Remove console.* in production
       },
     },
   }
   ```

3. Implement webhook verification (15 minutes):
   ```javascript
   // In auth.js
   const { Webhook } = require('svix');
   
   exports.handleWebhook = async (req, res, next) => {
     const webhook = new Webhook(process.env.CLERK_WEBHOOK_SECRET);
     try {
       webhook.verify(JSON.stringify(req.body), req.headers);
       next();
     } catch (err) {
       return res.status(400).json({ error: 'Invalid signature' });
     }
   };
   ```

---

**Summary:** Code is generally well-structured. Main issues are debug logs and missing webhook verification. All fixable before production deployment.
