# Personal Portfolio Website

A static portfolio website compatible with GitHub Pages.

## GitHub Pages Setup

This website has been converted from PHP to static HTML for GitHub Pages compatibility.

### To deploy to GitHub Pages:

1. **Push to GitHub**: Push this repository to GitHub
2. **Enable GitHub Pages**:
   - Go to your repository settings
   - Navigate to "Pages" in the left sidebar
   - Under "Source", select the branch you want to deploy (usually `main` or `master`)
   - Select the root folder (`/`)
   - Click "Save"
3. **Access your site**: Your site will be available at `https://[your-username].github.io/[repository-name]`

### Contact Form

The contact form uses a client-side implementation. Currently, it uses a `mailto:` link as a fallback. For better functionality, you can:

1. **Use Formspree** (Recommended):
   - Sign up at [formspree.io](https://formspree.io)
   - Get your form endpoint
   - In `contact.html`, uncomment the Formspree code and replace `YOUR_FORM_ID` with your actual form ID

2. **Use other form services**: You can integrate with services like:
   - [Netlify Forms](https://www.netlify.com/docs/form-handling/)
   - [EmailJS](https://www.emailjs.com/)
   - [Getform](https://getform.io/)

### File Structure

- `index.html` - Home page
- `education.html` - Education page
- `career.html` - Career page
- `projects.html` - Projects page
- `hobbies.html` - Hobbies page
- `contact.html` - Contact page with form
- `.nojekyll` - Prevents Jekyll processing (needed for GitHub Pages)

### Notes

- All PHP files have been converted to static HTML
- The contact form now uses client-side validation
- All navigation links have been updated to use `.html` extensions
- The `.nojekyll` file ensures GitHub Pages serves all files correctly

