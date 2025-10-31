
# Animal Aid SA Website

This is a simple static website built using **HTML**, **CSS**, and **JavaScript**.  
It demonstrates a small non-profit organisation website structure, styling, interactivity, and responsive design for learning and practice purposes.

## Features
- Responsive layout for desktop, tablet and mobile.
- Navigation menu with linked pages and accessible skip link.
- Pages: Home, About, Adopt, Donate, Enquiries, and Contact.
- Image lightbox (Adopt page) and animated image slider.
- Modern dark theme with gradient buttons and 3D card effects.
- CSS animations and scroll reveal effects.
- JavaScript features: mobile nav toggle, smooth scroll, lightbox, filters, modal application, form validation, animated counters.
- SEO basics: meta descriptions, keywords, robots.txt and sitemap.xml (included).
- Accessibility considerations: ARIA labels, skip-link, form status (aria-live).

## File & Folder Structure
AnimalAidSA/
- index.html  
  *Home page (entry point)*  
- about.html  
  *About the organisation*  
- adopt.html  
  *Adopt a pet page*  
- donate.html  
  *Donation information page*  
- enquiry.html  
  *Volunteer/sponsorship enquiry form*  
- contact.html  
  *Contact details and form*  

css/
- style.css  
  *Main stylesheet (dark theme, animations, responsive rules)*

images/
- ado.webp, cats.webp,download(1).webp ,download(2).webp,download(3).webp,download(4).webp,download.webp,dr.webp,ginger.webp,healed dog.webp, OIP(1).webp , OIP(2).webp , OIP(3).webp,OIP.webp, playful kittens.webp, r.webp, rehab.webp,rescued puppy.webp,sarah.webp, team.webp,v.webp ...
  *Images used in the site*
- screenshot-desktop.png  
  *Desktop screenshot*
- screenshot-tablet.png  
  *Tablet screenshot*
- screenshot-mobile.png  
  *Mobile screenshot*

js/
- script.js  
  *All interactive JavaScript (nav toggle, filters, lightbox, modals, validation, counters, animations)*

docs/
- README.md  
  *Project overview and instructions*

robots.txt  
sitemap.xml

## Installation / How to Run
1. Download or clone this repository.  
2. Ensure the folder structure is preserved (css/, js/, images/).  
3. Open the `index.html` file in any modern browser. No server setup is required (static website).

## Dependencies
- **Google Fonts** – for typography (Montserrat and Inter).
- **Font Awesome** – for social icons (Facebook, WhatsApp).
- **Free stock images** from Unsplash / Pexels (where used).

## Usage Instructions
- Edit the `index.html` file to update homepage content.
- Modify `css/style.css` to change colours, fonts, layout or animation values.
- Edit the `js/script.js` to tweak interactive behaviour (filters, modals, validation).
- Replace images in the `images/` folder to update visual content.

## Author
Samkelisiwe – ST10459928

## Changelog
### v1.0.0 – Initial Release (2025-09-01)
- Created the project folder and initial file structure.
- Added homepage (`index.html`), “About”, “Adopt”, “Donate”, “Enquiries” and “Contact” pages.
- Added navigation bar and footer.

### v1.1.0 – Styling Update (2025-09-15)
- Added CSS dark theme and responsive layout.
- Added animated image slider to Adopt page.
- Improved mobile responsiveness and form styling.

### v1.2.0 – Content & Responsiveness Update (2025-09-25)
- Added realistic content and images to all pages.
- Adjusted adopt page image sizes for better visibility.
- Added media queries for tablet and mobile view.
- Added example responsive image using `<picture>` element.
- Integrated Font Awesome icons for Facebook and WhatsApp in footer.

### v1.3.0 – Functionality & Part 3 Update (2025-10-19)
### v1.3.0 – Functionality & Part 3 Update (2025-10-19)
- Added `js/script.js` for interactivity:
  - Mobile navigation toggle with animated burger icon.
  - Smooth scrolling for internal links.
  - Image lightbox for Adopt page with responsive sizing.
  - Filters for adoptable pets by type or category.
  - Modal adoption form with accessible focus management.
  - Client-side form validation for contact and enquiry forms with live feedback (aria-live).
  - Animated counters for stats and metrics.
  - Scroll reveal and fade-in animations for page elements.
- Added short CSS animation utilities:
  - `.fade-in` and `.zoom-in` for scroll-triggered effects.
  - `.pulse` animation for call-to-action buttons.
  - Improved 3D hover effects for cards and images.
  - Subtle card shine effect on hover.
- Fixed accordion on About page for Mission & Vision:
  - Smooth open/close animation with max-height and padding transitions.
  - Active state toggle controlled by JavaScript.
- Improved mobile navigation:
  - Burger menu toggles the `.active` class correctly.
  - Dropdown animation for nav links using keyframes.
  - Nav links stacked neatly and full-width on small screens.
- Embedded responsive Google Maps iframes for multiple locations.
- SEO improvements:
  - Added `robots.txt` and `sitemap.xml`.
- Updated README with Part 3 notes and references.


## References (Harvard Style)
- Google (2024) *Google Maps Embed API*. Available at: https://developers.google.com/maps/documentation/embed (Accessed: 19 October 2025).  
- Font Awesome (2024) *Font Awesome Icons Library*. Available at: https://fontawesome.com (Accessed: 19 October 2025).  
- Unsplash (2024) *Free stock photos*. Available at: https://unsplash.com (Accessed: 19 October 2025).  
- Pexels (2024) *Free photos and videos*. Available at: https://pexels.com (Accessed: 19 October 2025).  
- MDN Web Docs (2025) *Using the HTML <dialog> element*. Available at: https://developer.mozilla.org (Accessed: 19 October 2025).  
- MDN Web Docs (2025) *Responsive images (srcset)*. Available at: https://developer.mozilla.org (Accessed: 19 October 2025).  
- Original content written by the student based on Animal Aid SA’s fictional scenario.

## Responsive Design Screenshots

The following screenshots demonstrate the website’s responsiveness on different screen sizes:

### Desktop View
![Desktop view of the homepage](/Assets/SCREENSHOT-DESKTOP.PNG)

### Tablet View
![Tablet view of the homepage](/Assets/screenshot-tablet.png)

### Mobile View
![Mobile view of the homepage](/Assets/screenshot-mobile.png)
`