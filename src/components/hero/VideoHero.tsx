'use client';

import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import CinematicLayer from './CinematicLayer';
import styles from './VideoHero.module.css';

export default function VideoHero() {
  const heroRef = useRef<HTMLElement>(null);
  const fgVideoRef = useRef<HTMLVideoElement>(null);
  const bgVideoRef = useRef<HTMLVideoElement>(null);

  const taglineRef = useRef<HTMLDivElement>(null);
  const firstNameRef = useRef<HTMLHeadingElement>(null);
  const lastNameRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaGroupRef = useRef<HTMLDivElement>(null);
  const controlsDockRef = useRef<HTMLDivElement>(null);
  const scrollIndicatorRef = useRef<HTMLButtonElement>(null);

  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [showSoundBadge, setShowSoundBadge] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSoundBadge(false);
    }, 6000);
    return () => clearTimeout(timer);
  }, []);

  const togglePlay = () => {
    if (!fgVideoRef.current || !bgVideoRef.current) return;
    if (isPlaying) {
      fgVideoRef.current.pause();
      bgVideoRef.current.pause();
      setIsPlaying(false);
    } else {
      fgVideoRef.current.play();
      bgVideoRef.current.play();
      setIsPlaying(true);
    }
  };

  const toggleSound = () => {
    if (!fgVideoRef.current) return;
    const nextMuted = !isMuted;
    fgVideoRef.current.muted = nextMuted;
    setIsMuted(nextMuted);
    setShowSoundBadge(false);
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.fromTo(
        heroRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 1.4, ease: 'power2.inOut' }
      )
        .fromTo(
          taglineRef.current,
          { y: 25, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.9 },
          '-=0.7'
        )
        .fromTo(
          [firstNameRef.current, lastNameRef.current],
          { y: 60, opacity: 0, scale: 0.97 },
          { y: 0, opacity: 1, scale: 1, duration: 1.1, stagger: 0.18 },
          '-=0.6'
        )
        .fromTo(
          subtitleRef.current,
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.9 },
          '-=0.6'
        )
        .fromTo(
          ctaGroupRef.current,
          { y: 25, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8 },
          '-=0.5'
        )
        .fromTo(
          [controlsDockRef.current, scrollIndicatorRef.current],
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8, stagger: 0.15 },
          '-=0.4'
        );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section ref={heroRef} className={styles.heroContainer}>
      <div className={styles.ambientVideoWrapper} aria-hidden="true">
        <video
          ref={bgVideoRef}
          className={styles.ambientVideo}
          src="/assets/intro-video.mp4"
          autoPlay
          loop
          muted
          playsInline
        />
      </div>

      <div className={styles.mainVideoWrapper}>
        <video
          ref={fgVideoRef}
          className={styles.mainVideo}
          src="/assets/intro-video.mp4"
          autoPlay
          loop
          muted={isMuted}
          playsInline
        />
      </div>

      <div className={styles.topVignette} />
      <div className={styles.bottomVignette} />
      <div className={styles.radialVignette} />

      <CinematicLayer />

      <div className={styles.contentContainer}>
        <div className={styles.textContent}>
          <div ref={taglineRef} className={styles.taglineBadge}>
            <span className={styles.pulseDot} />
            <span className={styles.taglineText}>
              Software Developer & QA Automation Engineer
            </span>
          </div>

          <div className={styles.nameBlock}>
            <h1 ref={firstNameRef} className={styles.firstName}>
              MANISH
            </h1>
            <h1 ref={lastNameRef} className={styles.lastName}>
              SINGH
            </h1>
          </div>

          <p ref={subtitleRef} className={styles.subtitle}>
            Architecting high-reliability test automation suites and scalable full-stack applications with 
            disciplined shift-left methodologies and precision quality engineering.
          </p>

          <div ref={ctaGroupRef} className={styles.ctaGroup}>
            <button
              className={styles.primaryCta}
              onClick={() => scrollToSection('projects')}
            >
              <span>Explore Projects</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </button>

            <button
              className={styles.secondaryCta}
              onClick={() => scrollToSection('experience')}
            >
              View Experience
            </button>
          </div>
        </div>

        <div ref={controlsDockRef} className={styles.controlsDock}>
          {showSoundBadge && isMuted && (
            <button
              className={styles.soundBadge}
              onClick={toggleSound}
              aria-label="Tap for sound"
            >
              <span className={styles.soundWaveIcon}>
                <span />
                <span />
                <span />
              </span>
              <span>Tap for sound</span>
            </button>
          )}

          <div className={styles.glassButtonCluster}>
            <button
              className={styles.glassBtn}
              onClick={togglePlay}
              aria-label={isPlaying ? 'Pause video' : 'Play video'}
              title={isPlaying ? 'Pause' : 'Play'}
            >
              {isPlaying ? (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <rect x="6" y="4" width="4" height="16" rx="1.5" />
                  <rect x="14" y="4" width="4" height="16" rx="1.5" />
                </svg>
              ) : (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <polygon points="5 3 19 12 5 21 5 3" />
                </svg>
              )}
            </button>

            <button
              className={`${styles.glassBtn} ${!isMuted ? styles.glassBtnActive : ''}`}
              onClick={toggleSound}
              aria-label={isMuted ? 'Unmute video' : 'Mute video'}
              title={isMuted ? 'Unmute' : 'Mute'}
            >
              {isMuted ? (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
                  <line x1="23" y1="9" x2="17" y2="15" />
                  <line x1="17" y1="9" x2="23" y2="15" />
                </svg>
              ) : (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
                  <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      <button
        ref={scrollIndicatorRef}
        className={styles.scrollIndicator}
        onClick={() => scrollToSection('about')}
        aria-label="Scroll to next section"
      >
        <span className={styles.scrollText}>SCROLL</span>
        <div className={styles.scrollTrack}>
          <div className={styles.scrollThumb} />
        </div>
      </button>
    </section>
  );
}
