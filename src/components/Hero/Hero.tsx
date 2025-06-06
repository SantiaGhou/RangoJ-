import React from 'react';
import { Play, Star, Users } from 'lucide-react';
import styles from './Hero.module.css';
import Pizza from '../../assets/pizzaHero.jpg';

export function Hero() {

  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.textContent}>
            <div className={styles.badge}>
              <Star className={styles.badgeIcon} />
              <span>App #1 em delivery para cidades pequenas</span>
            </div>
            
            <h1 className={styles.title}>
              Seu <span className={styles.highlight}>delivery favorito</span> 
              <br />chegou na sua cidade
            </h1>
            
            <p className={styles.description}>
              Conectamos você aos melhores restaurantes da sua região. 
              Comida gostosa, entrega rápida e preços justos, 
              pensados especialmente para cidades pequenas.
            </p>

            <div className={styles.stats}>
              <div className={styles.stat}>
                <Users className={styles.statIcon} />
                <div>
                  <span className={styles.statNumber}>50k+</span>
                  <span className={styles.statLabel}>Usuários ativos</span>
                </div>
              </div>
              <div className={styles.stat}>
                <Star className={styles.statIcon} />
                <div>
                  <span className={styles.statNumber}>4.8</span>
                  <span className={styles.statLabel}>Avaliação média</span>
                </div>
              </div>
            </div>

            <div className={styles.actions}>
              <button className={styles.primaryButton}>
                Baixar App Grátis
              </button>
              <button className={styles.secondaryButton}>
                <Play className={styles.playIcon} />
                Ver como funciona
              </button>
            </div>
          </div>

          <div className={styles.imageContent}>
            <div className={styles.phoneWrapper}>
              <img 
                src={Pizza} 
                alt="Imagem de um smartphone mostrando o app RangoJá" 
                className={styles.phoneImage}
              />
              <div className={styles.floatingCard}>
                <div className={styles.cardContent}>
                  <div className={styles.cardIcon}>🍕</div>
                  <div>
                    <div className={styles.cardTitle}>Pizza Margherita</div>
                    <div className={styles.cardPrice}>R$ 32,90</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

