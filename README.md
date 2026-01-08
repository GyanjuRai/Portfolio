# Gyanju Rai - Professional Portfolio

A modern, responsive portfolio website built with HTML, CSS, and JavaScript.

## Features

✨ **Professional Design**
- Clean black and white theme that's easy on the eyes
- Responsive design that works on desktop, tablet, and mobile
- Smooth scrolling and animations

📱 **Fully Responsive**
- Mobile-first approach
- Optimized for all screen sizes (480px to 1920px+)
- Touch-friendly interactive elements

🎯 **Key Sections**
- **Hero Section**: Profile image, name, title, and call-to-action
- **Experience**: Expandable drawer showing internship details
- **Projects**: 2 projects with technologies and features (expandable)
- **Education**: Degree and university information
- **CV Download**: Download your resume as PDF
- **Skills**: Organized by Backend, Frontend, and Tools
- **Contact/Footer**: Social media links with Font Awesome icons

🎨 **Interactive Elements**
- Expandable/collapsible drawers for experience and projects
- Smooth animations and hover effects
- Navigation highlighting based on scroll position
- Intersection observer for scroll animations

## File Structure

```
portfolio/
├── index.html      # Main HTML structure
├── style.css       # All styling and responsive design
├── script.js       # Interactive functionality
├── cv.pdf          # Your resume (create this file)
├── images/
│   └── profile.jpg # Your profile picture
└── README.md       # This file
```

## Getting Started

### 1. Add Your Profile Picture
- Place your profile image in the `images/` folder
- Name it `profile.jpg` or update the path in index.html (line 46)
- Recommended size: 500x500px or larger
- Image will be displayed as a circle with 200px diameter

### 2. Add Your CV
- Create a file named `cv.pdf` in the portfolio root directory
- Place your resume PDF there
- Users will be able to download it from the "Get My CV" section

### 3. Update Your Information

#### Personal Information
Edit the following in `index.html`:
- **Line 46**: Profile image path
- **Line 47-49**: Name, title, and summary
- **Line 51**: CTA button link (currently points to #projects)

#### Experience Section
Update the internship details (lines 64-83):
- Company name
- Job title
- Dates
- Tasks and responsibilities

#### Projects Section
Update your 2 projects (lines 95-175):
- Project names
- Technologies used
- Features and implementations

#### Education Section
Update your education (lines 192-198):
- Degree name
- College/University name
- Graduation year

#### Skills Section
Update your skills (lines 214-249):
- Add/remove skills
- Organize by category

#### Contact Information
Update footer links (lines 290-307):
- Replace GitHub URL: `https://github.com/yourprofile`
- Replace LinkedIn URL: `https://linkedin.com/in/yourprofile`
- Replace Instagram URL: `https://instagram.com/yourprofile`
- Replace WhatsApp link: `https://wa.me/yourphonenumber` (format: 91xxxxxxxxxx for India)
- Replace email address
- Replace phone number

## Customization

### Colors
Edit CSS variables in `style.css` (lines 2-13):
```css
:root {
    --primary-dark: #1a1a1a;      /* Main dark color */
    --primary-light: #f5f5f5;      /* Main light color */
    --secondary-dark: #2d2d2d;     /* Secondary dark */
    --accent-light: #e8e8e8;       /* Accent light */
    --text-dark: #333333;          /* Text on light bg */
    --text-light: #ffffff;         /* Text on dark bg */
    --border-color: #d0d0d0;       /* Border color */
}
```

### Fonts
Change the font family in `style.css` (line 20):
```css
body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}
```

### Spacing & Sizes
All spacing and sizes use CSS variables and can be adjusted in the relevant CSS sections.

## Icons Used

This portfolio uses **Font Awesome 6.4.0** for icons:
- Solid icons: briefcase, code, graduation-cap, tools, file-pdf, calendar, envelope, phone, server, laptop-code, hammer, school, database, cube, book, folder-open, chevron-down, heart
- Brand icons: github, linkedin, instagram, whatsapp

Icons are automatically included via CDN in the HTML.

## Responsive Breakpoints

- **Desktop**: 1200px and above
- **Tablet**: 768px to 1199px
- **Mobile**: 480px to 767px
- **Small Mobile**: Below 480px

Each breakpoint has optimized styles for the best user experience.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Deployment to Netlify

### Step 1: Prepare Your Files
- Ensure all files are in your portfolio directory
- Make sure `cv.pdf` is in the root directory
- Ensure `images/profile.jpg` exists

### Step 2: Initialize Git Repository
```bash
cd d:\portfolio
git init
git add .
git commit -m "Initial portfolio commit"
```

### Step 3: Create Netlify Account
1. Go to [netlify.com](https://netlify.com)
2. Sign up with GitHub, GitLab, or Bitbucket

### Step 4: Connect Repository
1. Click "New site from Git"
2. Choose your git provider
3. Select your portfolio repository
4. Click "Deploy"

### Step 5: Configure Build Settings (if needed)
- Build command: (leave empty for static site)
- Publish directory: `/` or `.`

### Step 6: Custom Domain (Optional)
- In Netlify dashboard, go to "Domain settings"
- Add your custom domain
- Follow DNS configuration instructions

## SEO Optimization

To improve search engine visibility, update these in `index.html`:
- Meta description in `<head>`
- Page title
- Heading structure (H1, H2, H3)
- Image alt text

## Performance Tips

1. **Optimize Images**: Compress your profile image to reduce file size
2. **Lazy Loading**: Consider adding loading="lazy" to images
3. **Minify CSS/JS**: Useful when you have more content
4. **Use CDN**: Font Awesome is already using a CDN

## Accessibility

The portfolio is built with accessibility in mind:
- Semantic HTML structure
- Alt text for images
- ARIA labels where needed
- Keyboard navigation support
- Reduced motion preferences respected

## Troubleshooting

### Profile Image Not Showing
- Check the image path in `index.html` line 46
- Ensure `images/profile.jpg` exists
- Verify image format and file name

### CV Download Not Working
- Ensure `cv.pdf` exists in the root portfolio directory
- Check file name matches exactly (case-sensitive on Linux/Netlify)

### Social Links Not Working
- Update URLs with your actual profile links
- For WhatsApp: use format `https://wa.me/1234567890` (country code + number)

### Drawer Not Toggling
- Check browser console for JavaScript errors
- Ensure `script.js` is linked in `index.html`

## Future Enhancements

Consider adding:
- Blog section for technical articles
- Dark mode toggle
- Contact form (integrate with Formspree or EmailJS)
- Project images/screenshots
- Certifications section
- Testimonials section
- More interactive animations

## License

This portfolio template is free to use and modify for your personal use.

## Support

For questions or issues, refer to the commented sections in the HTML, CSS, and JavaScript files.

---

**Made with ❤️ | Optimized for Modern Browsers | Ready for Netlify Deployment**
