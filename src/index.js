// 1. Import library AOS-nya
import AOS from 'aos';

// 2. Import file CSS AOS-nya (Sangat penting! Tanpa ini animasi tidak akan jalan)
import '/node_modules/aos/dist/aos.css'; 

// 3. Inisialisasi (Nyalakan) AOS
// Disarankan menaruhnya di dalam event listener agar HTML dimuat duluan
document.addEventListener('DOMContentLoaded', () => {
    AOS.init({
        duration: 800, // Durasi animasi 0.8 detik
        once: true,    // Animasi hanya berjalan 1 kali saat di-scroll
        offset: 100    // Jarak dari bawah layar sebelum animasi memicu
    });
});