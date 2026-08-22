# Yarn Couture - Next Steps & Implementation Guide

## Overview
This document outlines the remaining tasks to launch your Yarn Couture landing page. These are the steps you'll need to complete after the initial design phase.

---

## Phase 1: Add Product Photos

### Objective
Replace all placeholder images with real product photography.

### Files to Update
- **Home Page** (`src/app/page.tsx`)
  - Line 105: Hero section image (`Hero image — featured yarn collection`)
  - Line 177: Collection spotlight image (`Collection detail shot`)

- **About Page** (`src/app/about/page.tsx`)
  - Line 20: Hero section image (`Yarn couture studio`)
  - Line 43: Brand story image (`Yarn dyed in color`)

- **Catalog Page** (`src/app/catalog/page.tsx`)
  - Lines 68-71: 6 product images (one for each product)

### How to Add Photos

#### Option 1: Direct Image Replacement (Recommended)
1. Save your product photos as PNG or JPG in `/public/images/` folder
   - Example: `/public/images/hero-yarn.jpg`, `/public/images/product-1.jpg`

2. Update the `ImagePlaceholder` component calls to use actual images:
   ```tsx
   // Change from:
   <ImagePlaceholder label="Hero image" className="..." />
   
   // To:
   <Image
     src="/images/hero-yarn.jpg"
     alt="Featured yarn collection"
     width={800}
     height={600}
     className="..."
   />
   ```

#### Option 2: Use External URLs
If your photos are hosted elsewhere (cloud storage, CDN):
```tsx
<Image
  src="https://your-image-url.com/image.jpg"
  alt="Description"
  width={800}
  height={600}
/>
```

### Image Specifications
- **Recommended Format**: PNG or JPG
- **Quality**: High-resolution (at least 1200px width)
- **Aspect Ratios**:
  - Hero images: 16:9 or 4:3
  - Product images: Square (1:1)
  - Feature sections: 4:3 or 3:2

### Next.js Image Best Practices
- Always specify `width` and `height`
- Use descriptive `alt` text
- Import `Image` from `next/image`

---

## Phase 2: Update Catalog Data

### Objective
Replace placeholder product information with your actual yarn catalog.

### File to Update
`src/app/catalog/page.tsx` (lines 4-41)

### Current Products to Replace
```javascript
const products = [
  {
    id: 1,
    name: "Luxe Merino Blend",
    category: "Premium Yarn",
    color: "Charcoal Grey"
  },
  // ... 5 more products
];
```

### How to Update

1. **Open** `src/app/catalog/page.tsx`

2. **Replace the products array** with your actual yarn products:
   ```javascript
   const products = [
     {
       id: 1,
       name: "Your Yarn Name",
       category: "Your Category",
       color: "Your Color"
     },
     // Add more products as needed
   ];
   ```

3. **Add more products** if needed (not limited to 6):
   - The grid will automatically adjust (currently 3 columns on desktop, 2 on tablet, 1 on mobile)
   - To add a new product, simply add a new object to the array

### Example
```javascript
const products = [
  {
    id: 1,
    name: "Ocean Wave Merino",
    category: "Hand-Dyed Luxury",
    color: "Deep Blue with Silver Sparkle"
  },
  {
    id: 2,
    name: "Sunset Cotton Blend",
    category: "Summer Collection",
    color: "Coral & Gold"
  },
  // ... add more
];
```

### Optional: Add More Product Information
If you want to display more details (like yardage, weight, material), update the product object and the display:

**In the products array:**
```javascript
{
  id: 1,
  name: "Ocean Wave Merino",
  category: "Hand-Dyed Luxury",
  color: "Deep Blue with Silver Sparkle",
  yardage: "450 yards",
  weight: "100g"
}
```

**In the JSX (around line 73):**
```tsx
<p className="text-small text-muted">{product.color}</p>
<p className="text-small text-muted">{product.yardage}</p>
<p className="text-small text-muted">{product.weight}</p>
```

---

## Phase 3: Set Up Google Forms (Optional)

### Objective
Connect your contact form to receive inquiries via Google Forms.

### Why Use Google Forms?
- Free and simple to set up
- Emails go directly to your inbox
- Responses automatically organized in a spreadsheet
- No backend needed

### Setup Steps

#### Step 1: Create a Google Form
1. Go to [Google Forms](https://forms.google.com)
2. Click **"Create a new form"**
3. Add these questions:
   - **Question 1**: "Name" (Short answer)
   - **Question 2**: "Email" (Short answer)
   - **Question 3**: "Phone" (Short answer)
   - **Question 4**: "Comments" (Paragraph)

#### Step 2: Get the Form URL
1. Click the **"Send"** button (top right)
2. Copy the form link (you'll use this in the next step)

#### Step 3: Extract the Form ID
The URL will look like:
```
https://docs.google.com/forms/d/e/1FAIpQLSd_XXXXXXXXXXXXXX/viewform
```

Extract the part between `/d/e/` and `/viewform`:
```
1FAIpQLSd_XXXXXXXXXXXXXX
```

#### Step 4: Create the Form Submission URL
Construct the action URL by replacing `FORM_ID`:
```
https://docs.google.com/forms/d/e/FORM_ID/formResponse
```

#### Step 5: Get Field IDs (Advanced)
To map form fields correctly, you need to find the field entry IDs:

1. Open your form in edit mode
2. Right-click the form → **"Inspect"** (or press F12)
3. Search for `entry.` in the HTML
4. Find the entry numbers for each field:
   ```html
   <input name="entry.123456789" ...>  <!-- Name field -->
   <input name="entry.987654321" ...>  <!-- Email field -->
   ```

#### Step 6: Update Your Environment Variables
In your `.env.local` file:
```
NEXT_PUBLIC_GOOGLE_FORM_URL=https://docs.google.com/forms/d/e/YOUR_FORM_ID/formResponse
```

#### Step 7: Update Form Field Mapping
In `src/app/contact/page.tsx`, update lines 47-50:
```javascript
const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
  // ...
  const formPayload = new FormData();
  formPayload.append("entry.YOUR_NAME_FIELD_ID", formData.name);
  formPayload.append("entry.YOUR_EMAIL_FIELD_ID", formData.email);
  formPayload.append("entry.YOUR_PHONE_FIELD_ID", formData.phone);
  formPayload.append("entry.YOUR_COMMENTS_FIELD_ID", formData.comments);
  // ...
};
```

### Test Your Form
1. Run the dev server: `npm run dev`
2. Go to http://localhost:3000/contact
3. Fill out and submit the form
4. Check your Google Form responses sheet

---

## Phase 4: Deploy to Production

### Objective
Get your live website online.

### Option 1: Deploy to Vercel (Recommended)

Vercel is the creator of Next.js and provides the easiest deployment.

#### Prerequisites
- GitHub account
- Vercel account (free)

#### Steps
1. **Push code to GitHub**
   ```bash
   git add .
   git commit -m "Yarn Couture landing page complete"
   git push origin main
   ```

2. **Connect to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click **"New Project"**
   - Select your GitHub repository
   - Click **"Import"**

3. **Configure Environment Variables**
   - In Vercel dashboard, go to **Settings** → **Environment Variables**
   - Add `NEXT_PUBLIC_GOOGLE_FORM_URL` (if using Google Forms)
   - Click **"Deploy"**

4. **Your site is live!**
   - Vercel will give you a URL like: `https://yarn-couture.vercel.app`

#### Add Custom Domain (Optional)
1. In Vercel dashboard, go to **Domains**
2. Add your custom domain (e.g., `www.yarncouture.com`)
3. Follow DNS instructions to connect your domain

### Option 2: Deploy to Other Services
- **Netlify**: Similar to Vercel, also free
- **AWS Amplify**: More control, slightly more complex
- **Self-hosted**: Requires your own server

### Option 3: Deploy Using Your Existing Host
If you already have a hosting provider:
1. Build the project locally: `npm run build`
2. Upload the `.next` folder to your host
3. Ensure Node.js is installed on your server
4. Run: `npm start`

---

## Checklist

### Before Launching
- [ ] All product photos added
- [ ] Product names/colors/categories updated
- [ ] Google Form created and connected (if using)
- [ ] Contact form tested locally
- [ ] All pages reviewed for content accuracy
- [ ] Links tested (navigation, CTAs)
- [ ] Mobile responsiveness checked

### Deployment
- [ ] Code pushed to GitHub
- [ ] Environment variables configured
- [ ] Site deployed to production
- [ ] Custom domain connected (if applicable)
- [ ] Form submissions tested from live site
- [ ] Analytics setup (optional)

### Post-Launch
- [ ] Monitor form submissions
- [ ] Check for broken images
- [ ] Test on different browsers
- [ ] Share with users/customers
- [ ] Gather feedback

---

## Quick Reference: File Locations

| Component | File Path |
|-----------|-----------|
| Home Page | `src/app/page.tsx` |
| About Page | `src/app/about/page.tsx` |
| Catalog Page | `src/app/catalog/page.tsx` |
| Contact Page | `src/app/contact/page.tsx` |
| Navbar | `src/components/navbar.tsx` |
| Global Styles | `src/app/globals.css` |
| Images | `public/images/` |
| Logo | `public/logo.png` |

---

## Troubleshooting

### Images Not Showing
- Check file paths (should start with `/`)
- Verify image files exist in `public/` folder
- Clear browser cache (Ctrl+Shift+Delete or Cmd+Shift+Delete)

### Form Not Submitting
- Check `NEXT_PUBLIC_GOOGLE_FORM_URL` in `.env.local`
- Verify entry IDs match your Google Form field IDs
- Check browser console for errors (F12 → Console tab)

### Deployment Issues
- Ensure all environment variables are set in production
- Check build logs in Vercel/Netlify dashboard
- Make sure `.env.local` is in `.gitignore` (don't commit secrets)

---

## Need Help?

- **Next.js Docs**: https://nextjs.org/docs
- **Vercel Docs**: https://vercel.com/docs
- **Google Forms API**: https://developers.google.com/forms

---

**Last Updated**: August 21, 2026  
**Project**: Yarn Couture Landing Page
