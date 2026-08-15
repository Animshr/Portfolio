# Anim Shrestha | Portfolio

<p align="center">
  <img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80" alt="Cozy mountain and forest landscape" width="1200" />
</p>

A warm, cinematic portfolio for Anim Shrestha — a Computer Science with Artificial Intelligence student, frontend developer, and UI/UX enthusiast. Built with Flask and handcrafted front-end experiences, this project reflects a quiet, thoughtful aesthetic inspired by cozy storytelling, nature, and digital calm.

## ✨ Portfolio vibe

- Cozy and atmospheric visual language
- Soft earth tones, layered textures, and editorial storytelling
- Responsive single-page experience with subtle motion and parallax
- Designed to feel personal, modern, and professional
- Inspired by calm nature scenes, anime moodboards, and manhwa-style minimalism

## 🧩 Tech stack

- Python + Flask
- HTML5 + CSS3
- Vanilla JavaScript
- Responsive design patterns
- Static-first deployment approach

## 🌿 Highlights

- Cinematic hero section with layered landscape styling
- Rich personal sections for about, skills, experience, education, projects, and milestones
- Project cards with thoughtful visual storytelling
- Contact section built for professional outreach
- Vercel-ready Flask structure through `api/index.py`

## 📁 Project structure

```text
.
├── api/
│   └── index.py              # Vercel-friendly Flask entry point
├── app/
│   ├── static/
│   │   ├── css/
│   │   │   └── style.css
│   │   ├── images/
│   │   │   ├── profile/
│   │   │   └── scenes/
│   │   └── js/
│   │       └── script.js
│   ├── templates/
│   │   └── index.html
│   └── __init__.py
├── run.py                    # Local Flask run script
├── requirements.txt
├── README.md
└── .gitignore
```

## ▶️ Run locally

Use Python 3.10+.

```bash
pip install -r requirements.txt
python run.py
```

Then open:

```text
http://127.0.0.1:5000
```

## 🖼️ Profile image

Place your uploaded profile image in `app/static/images/profile/` and reference it from the template. For example:

```text
app/static/images/profile/animphoto.jpeg
```

Then in the HTML, swap only the image path while keeping the existing layout intact.

## 🌲 Design notes

This portfolio intentionally uses handcrafted CSS scenery rather than relying on heavy external image dependencies, which helps keep the experience lightweight and consistent.

If you want to add future visual elements, you can place mood-themed local assets in:

```text
app/static/images/scenes/
```

and reference them in the stylesheet without disturbing the rest of the structure.

## 🚀 Deploy

This app is compatible with Vercel and uses the Flask app exposed by `api/index.py`.

1. Push this repository to GitHub.
2. Import it into Vercel.
3. Ensure dependencies install from `requirements.txt`.

No database or extra environment variables are required for the current build.

## 💬 Connect

- GitHub: https://github.com/Animshr
- LinkedIn: https://www.linkedin.com/in/animshrestha/
- Email: animshr123@gmail.com

<p align="center">
  <img src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80" alt="Cozy nature illustration" width="900" />
</p>
