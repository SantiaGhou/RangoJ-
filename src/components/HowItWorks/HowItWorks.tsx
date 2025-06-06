import React from 'react';
import { Search, ShoppingCart, Truck, CheckCircle } from 'lucide-react';
import styles from './HowItWorks.module.css';

export function HowItWorks() {
  const steps = [
    {
      icon: <Search />,
      title: 'Escolha seu restaurante',
      description: 'Navegue pelos melhores restaurantes da sua cidade e encontre o que você está procurando.'
    },
    {
      icon: <ShoppingCart />,
      title: 'Monte seu pedido',
      description: 'Adicione seus pratos favoritos ao carrinho e personalize como quiser.'
    },
    {
      icon: <Truck />,
      title: 'Acompanhe a entrega',
      description: 'Receba atualizações em tempo real sobre o status do seu pedido.'
    },
    {
      icon: <CheckCircle />,
      title: 'Receba em casa',
      description: 'Sua comida chega quentinha e no tempo combinado, direto na sua porta.'
    }
  ];

  return (
    <section id="how-it-works" className={styles.howItWorks}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>
            Como funciona o <span className={styles.highlight}>Rango Já</span>
          </h2>
          <p className={styles.description}>
            Em apenas 4 passos simples, você tem sua comida favorita 
            entregue rapidinho na sua casa.
          </p>
        </div>

        <div className={styles.steps}>
          {steps.map((step, index) => (
            <div key={index} className={styles.step}>
              <div className={styles.stepNumber}>{index + 1}</div>
              <div className={styles.stepIcon}>
                {step.icon}
              </div>
              <h3 className={styles.stepTitle}>{step.title}</h3>
              <p className={styles.stepDescription}>{step.description}</p>
              {index < steps.length - 1 && <div className={styles.connector} />}
            </div>
          ))}
        </div>

        <div className={styles.cta}>
          <button className={styles.ctaButton}>
            Começar Agora
          </button>
        </div>
      </div>
    </section>
  );
};

