# Profile Image Setup

## Required Action

Please save your profile image with the following details:

**File Path:** `public/images/karan-profile.jpg`

**Steps:**
1. Create the `public/images` folder if it doesn't exist (already done)
2. Save your profile photo as `karan-profile.jpg` in the `public/images/` directory
3. The image should be:
   - Square or portrait orientation
   - High quality (recommended: at least 800x800px)
   - JPG or PNG format
   - Professional headshot

**Current Implementation:**
The About section now displays your profile image with:
- Dynamic grey gradient backgrounds
- Hover effects with animated blur elements
- Modern border styling
- Responsive sizing (displays at 320x320px on screen)

Once you add the image, it will automatically appear on the portfolio!

## Alternative: Temporary Placeholder

If you want to use a different image name or location, update line 104 in `components/About.tsx`:

```tsx
src="/images/karan-profile.jpg"  // Change this path
```
