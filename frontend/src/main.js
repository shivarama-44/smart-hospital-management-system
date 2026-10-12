 import './style.css'

document.querySelector('#app').innerHTML = `
  <header class="navbar">
    <h2>🏥 SmartCare</h2>
    <nav>
      <a href="#home">Home</a>
      <a href="#services">Services</a>
      <a href="#doctors">Doctors</a>
      <a href="#appointment">Appointment</a>
    </nav>
  </header>

  <main>
    <section class="hero" id="home">
      <div class="hero-content">
        <p class="tagline">YOUR HEALTH, OUR PRIORITY</p>
        <h1>Quality Healthcare<br>Made Simple.</h1>
        <p>Find doctors, book appointments, and manage your healthcare in one convenient place.</p>
        <a class="book-btn" href="#appointment">Book Appointment</a>
      </div>
      <div class="hero-icon">🩺</div>
    </section>

    <section class="services" id="services">
      <h2>Our Services</h2>
      <p class="section-text">Healthcare support for your needs</p>

      <div class="cards">
        <article class="card">
          <span>👨‍⚕️</span>
          <h3>Find Doctors</h3>
          <p>Explore doctors by their medical specialty.</p>
        </article>

        <article class="card">
          <span>📅</span>
          <h3>Book Appointment</h3>
          <p>Choose a convenient date for your visit.</p>
        </article>

        <article class="card">
          <span>📋</span>
          <h3>Patient Management</h3>
          <p>Keep patient information organized.</p>
        </article>
      </div>
    </section>

    <section class="appointment" id="appointment">
      <h2>Ready to Book Your Visit?</h2>
      <p>Our appointment booking feature will be built next.</p>
      <button class="book-btn" id="startBooking">Get Started</button>
      <p id="message"></p>
    </section>
  </main>

  <footer>
    <p>© 2026 SmartCare Hospital Management System</p>
  </footer>
`

document.querySelector('#startBooking').addEventListener('click', () => {
  document.querySelector('#message').textContent =
    'Appointment booking form will be added in the next step.'
})