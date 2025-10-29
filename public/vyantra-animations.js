// Vyantra Website Interactive JavaScript
// Premium animations and interactions for mental health platform

if (typeof window.VyantraAnimations === "undefined") {
  class VyantraAnimations {
    constructor() {
      this.init()
    }

    init() {
      this.setupScrollAnimations()
      this.setupParallaxEffects()
      this.setupHoverAnimations()
      this.setupSmoothScrolling()
      this.setupFloatingElements()
      this.setupTypingEffect()
      this.setupCounterAnimations()
    }

    // Intersection Observer for scroll-triggered animations
    setupScrollAnimations() {
      const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      }

      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in-up")

            // Add staggered animation for cards
            if (entry.target.classList.contains("stagger-animation")) {
              const children = entry.target.children
              Array.from(children).forEach((child, index) => {
                setTimeout(() => {
                  child.classList.add("animate-slide-in")
                }, index * 100)
              })
            }
          }
        })
      }, observerOptions)

      // Observe all elements with animation classes
      document.querySelectorAll(".animate-on-scroll").forEach((el) => {
        observer.observe(el)
      })
    }

    // Parallax scrolling effects
    setupParallaxEffects() {
      window.addEventListener("scroll", () => {
        const scrolled = window.pageYOffset
        const parallaxElements = document.querySelectorAll(".parallax-element")

        parallaxElements.forEach((element) => {
          const speed = element.dataset.speed || 0.5
          const yPos = -(scrolled * speed)
          element.style.transform = `translateY(${yPos}px)`
        })
      })
    }

    // Enhanced hover animations
    setupHoverAnimations() {
      // Service cards hover effects
      document.querySelectorAll(".service-card").forEach((card) => {
        card.addEventListener("mouseenter", () => {
          card.style.transform = "translateY(-10px) scale(1.02)"
          card.style.boxShadow = "0 20px 40px rgba(0,0,0,0.1)"

          const icon = card.querySelector(".service-icon")
          if (icon) {
            icon.style.transform = "rotate(10deg) scale(1.1)"
          }
        })

        card.addEventListener("mouseleave", () => {
          card.style.transform = "translateY(0) scale(1)"
          card.style.boxShadow = ""

          const icon = card.querySelector(".service-icon")
          if (icon) {
            icon.style.transform = "rotate(0deg) scale(1)"
          }
        })
      })

      // Button glow effects
      document.querySelectorAll(".glow-button").forEach((button) => {
        button.addEventListener("mouseenter", () => {
          button.style.boxShadow = "0 0 20px rgba(34, 197, 94, 0.5)"
        })

        button.addEventListener("mouseleave", () => {
          button.style.boxShadow = ""
        })
      })
    }

    // Smooth scrolling for navigation
    setupSmoothScrolling() {
      document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener("click", function (e) {
          e.preventDefault()
          const target = document.querySelector(this.getAttribute("href"))
          if (target) {
            target.scrollIntoView({
              behavior: "smooth",
              block: "start",
            })
          }
        })
      })
    }

    // Floating background elements
    setupFloatingElements() {
      const createFloatingElement = (className, size, duration) => {
        const element = document.createElement("div")
        element.className = className
        element.style.cssText = `
          position: absolute;
          width: ${size}px;
          height: ${size}px;
          background: linear-gradient(135deg, rgba(34, 197, 94, 0.1), rgba(59, 130, 246, 0.1));
          border-radius: 50%;
          animation: float ${duration}s ease-in-out infinite;
          pointer-events: none;
          z-index: -1;
        `
        return element
      }

      // Add floating elements to hero section
      const heroSection = document.querySelector(".hero-section")
      if (heroSection) {
        for (let i = 0; i < 5; i++) {
          const floatingEl = createFloatingElement("floating-element", Math.random() * 100 + 50, Math.random() * 3 + 4)
          floatingEl.style.left = Math.random() * 100 + "%"
          floatingEl.style.top = Math.random() * 100 + "%"
          floatingEl.style.animationDelay = Math.random() * 2 + "s"
          heroSection.appendChild(floatingEl)
        }
      }
    }

    // Typing effect for hero text
    setupTypingEffect() {
      const typeText = (element, text, speed = 100) => {
        let i = 0
        element.innerHTML = ""

        const timer = setInterval(() => {
          if (i < text.length) {
            element.innerHTML += text.charAt(i)
            i++
          } else {
            clearInterval(timer)
            element.classList.add("typing-complete")
          }
        }, speed)
      }

      const heroTitle = document.querySelector(".typing-effect")
      if (heroTitle) {
        const originalText = heroTitle.textContent
        setTimeout(() => {
          typeText(heroTitle, originalText, 80)
        }, 1000)
      }
    }

    // Animated counters
    setupCounterAnimations() {
      const animateCounter = (element, target, duration = 2000) => {
        let start = 0
        const increment = target / (duration / 16)

        const timer = setInterval(() => {
          start += increment
          if (start >= target) {
            element.textContent = target.toLocaleString()
            clearInterval(timer)
          } else {
            element.textContent = Math.floor(start).toLocaleString()
          }
        }, 16)
      }

      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const counter = entry.target
            const target = Number.parseInt(counter.dataset.target)
            animateCounter(counter, target)
            observer.unobserve(counter)
          }
        })
      })

      document.querySelectorAll(".counter").forEach((counter) => {
        observer.observe(counter)
      })
    }

    // Particle system for background
    createParticleSystem() {
      const canvas = document.createElement("canvas")
      const ctx = canvas.getContext("2d")
      canvas.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        z-index: -1;
        opacity: 0.3;
      `

      document.body.appendChild(canvas)

      const resizeCanvas = () => {
        canvas.width = window.innerWidth
        canvas.height = window.innerHeight
      }

      resizeCanvas()
      window.addEventListener("resize", resizeCanvas)

      const particles = []
      const particleCount = 50

      class Particle {
        constructor() {
          this.x = Math.random() * canvas.width
          this.y = Math.random() * canvas.height
          this.vx = (Math.random() - 0.5) * 0.5
          this.vy = (Math.random() - 0.5) * 0.5
          this.size = Math.random() * 2 + 1
          this.opacity = Math.random() * 0.5 + 0.2
        }

        update() {
          this.x += this.vx
          this.y += this.vy

          if (this.x < 0 || this.x > canvas.width) this.vx *= -1
          if (this.y < 0 || this.y > canvas.height) this.vy *= -1
        }

        draw() {
          ctx.beginPath()
          ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
          ctx.fillStyle = `rgba(34, 197, 94, ${this.opacity})`
          ctx.fill()
        }
      }

      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle())
      }

      const animate = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height)

        particles.forEach((particle) => {
          particle.update()
          particle.draw()
        })

        requestAnimationFrame(animate)
      }

      animate()
    }

    // Mouse trail effect
    setupMouseTrail() {
      const trail = []
      const trailLength = 10

      document.addEventListener("mousemove", (e) => {
        trail.push({ x: e.clientX, y: e.clientY, time: Date.now() })

        if (trail.length > trailLength) {
          trail.shift()
        }

        // Create trail elements
        trail.forEach((point, index) => {
          const trailElement = document.createElement("div")
          trailElement.style.cssText = `
            position: fixed;
            left: ${point.x}px;
            top: ${point.y}px;
            width: ${(index + 1) * 2}px;
            height: ${(index + 1) * 2}px;
            background: radial-gradient(circle, rgba(34, 197, 94, ${0.8 - index * 0.08}), transparent);
            border-radius: 50%;
            pointer-events: none;
            z-index: 9999;
            transform: translate(-50%, -50%);
          `

          document.body.appendChild(trailElement)

          setTimeout(() => {
            trailElement.remove()
          }, 500)
        })
      })
    }

    // Loading animation
    showLoadingAnimation() {
      const loader = document.createElement("div")
      loader.id = "vyantra-loader"
      loader.innerHTML = `
        <div class="loader-content">
          <div class="lotus-loader">
            <div class="petal"></div>
            <div class="petal"></div>
            <div class="petal"></div>
            <div class="petal"></div>
            <div class="petal"></div>
          </div>
          <h2>Vyantra</h2>
          <p>Loading your wellness journey...</p>
        </div>
      `

      loader.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(135deg, #f0fdf4, #ecfdf5);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 10000;
        transition: opacity 0.5s ease;
      `

      document.body.appendChild(loader)

      // Hide loader after page load
      window.addEventListener("load", () => {
        setTimeout(() => {
          loader.style.opacity = "0"
          setTimeout(() => {
            loader.remove()
          }, 500)
        }, 1500)
      })
    }
  }

  window.VyantraAnimations = VyantraAnimations

  // CSS Animations (to be added to stylesheet)
  const additionalCSS = `
  @keyframes float {
    0%, 100% { transform: translateY(0px) rotate(0deg); }
    50% { transform: translateY(-20px) rotate(5deg); }
  }

  @keyframes fade-in-up {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes slide-in {
    from {
      opacity: 0;
      transform: translateX(-30px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  @keyframes pulse-glow {
    0%, 100% { 
      box-shadow: 0 0 5px rgba(34, 197, 94, 0.3);
      transform: scale(1);
    }
    50% { 
      box-shadow: 0 0 20px rgba(34, 197, 94, 0.6);
      transform: scale(1.05);
    }
  }

  @keyframes lotus-spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }

  .animate-fade-in-up {
    animation: fade-in-up 0.8s ease-out forwards;
  }

  .animate-slide-in {
    animation: slide-in 0.6s ease-out forwards;
  }

  .animate-float {
    animation: float 6s ease-in-out infinite;
  }

  .animate-pulse-glow {
    animation: pulse-glow 2s ease-in-out infinite;
  }

  .lotus-loader {
    width: 60px;
    height: 60px;
    position: relative;
    animation: lotus-spin 2s linear infinite;
  }

  .lotus-loader .petal {
    position: absolute;
    width: 20px;
    height: 20px;
    background: linear-gradient(135deg, #22c55e, #3b82f6);
    border-radius: 50% 0;
    transform-origin: bottom right;
  }

  .lotus-loader .petal:nth-child(1) { transform: rotate(0deg); }
  .lotus-loader .petal:nth-child(2) { transform: rotate(72deg); }
  .lotus-loader .petal:nth-child(3) { transform: rotate(144deg); }
  .lotus-loader .petal:nth-child(4) { transform: rotate(216deg); }
  .lotus-loader .petal:nth-child(5) { transform: rotate(288deg); }

  .typing-effect::after {
    content: '|';
    animation: blink 1s infinite;
  }

  .typing-complete::after {
    display: none;
  }

  @keyframes blink {
    0%, 50% { opacity: 1; }
    51%, 100% { opacity: 0; }
  }
  `

  // Initialize animations when DOM is loaded
  document.addEventListener("DOMContentLoaded", () => {
    // Add additional CSS
    const style = document.createElement("style")
    style.textContent = additionalCSS
    document.head.appendChild(style)

    // Initialize Vyantra animations
    new VyantraAnimations()
  })

  // Export for module use
  if (typeof module !== "undefined" && module.exports) {
    module.exports = VyantraAnimations
  }
}
