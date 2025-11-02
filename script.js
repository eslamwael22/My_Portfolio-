document.addEventListener('DOMContentLoaded', function() {
  if (window.AOS) {
    AOS.init({ duration: 700, once: true, easing: 'ease-out-cubic' });
  }

  // Smooth scroll for internal links
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', function(e){
      const id = this.getAttribute('href');
      if (id.length > 1) {
        e.preventDefault();
        document.querySelector(id).scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  // Update year in footer
  const y = document.getElementById('year');
  if(y) y.textContent = new Date().getFullYear();
});

// Projects data + modal handling
const projects = {
  news: { title:'News App', desc:'A Flutter news reader with search, categories and pagination.', tech:'Flutter • Dio • REST', git:'https://github.com/eslamwael22', demo:'#' },
  bmi: { title:'BMI Calculator', desc:'A Flutter app with local history and clear visual feedback.', tech:'Flutter • Dart', git:'https://github.com/eslamwael22/BMI_Calculator', demo:'#' },
  toku: { title:'Toku App', desc:'Educational application with multi-screen navigation.', tech:'Flutter • Provider', git:'https://github.com/eslamwael22/Toku_app', demo:'#' }
};

function openProject(id){
  const p = projects[id];
  if(!p) return;
  const modal = document.getElementById('modal');
  document.getElementById('modalTitle').textContent = p.title;
  document.getElementById('modalDesc').textContent = p.desc;
  document.getElementById('modalTech').textContent = p.tech;
  document.getElementById('modalGit').href = p.git;
  document.getElementById('modalDemo').href = p.demo;
  modal.style.display = 'flex';
}

// Close modal
document.addEventListener('click', function(e){
  if(e.target && e.target.id === 'closeModal'){
    document.getElementById('modal').style.display = 'none';
  }
});
// Animate skill bars when they appear on screen
const skillSection = document.getElementById('skills');
const skillBars = document.querySelectorAll('.skill-level');

function animateSkills() {
  skillBars.forEach(bar => {
    const target = bar.getAttribute('data-skill');
    bar.style.width = target + '%';
  });
}

let skillsAnimated = false;
window.addEventListener('scroll', () => {
  const sectionPos = skillSection.getBoundingClientRect().top;
  const screenPos = window.innerHeight / 1.2;

  if (sectionPos < screenPos && !skillsAnimated) {
    animateSkills();
    skillsAnimated = true;
  }
});

