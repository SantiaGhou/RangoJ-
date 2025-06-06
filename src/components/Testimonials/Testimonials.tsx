import React from 'react';
import { Star, Quote } from 'lucide-react';
import styles from './Testimonials.module.css';

export function Testimonials() {
  const testimonials = [
    {
      name: 'Maria Clara',
      location: 'Centro, Caculé',
      rating: 5,
      text: 'Finalmente um app que funciona de verdade na nossa cidade! Entrega rápida e os restaurantes locais que eu já conhecia. Recomendo demais!',
      avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    {
      name: 'João Lucas',
      location: 'Praça da Matriz',
      rating: 5,
      text: 'Uso quase todo dia! O app é super fácil de usar e sempre chega no tempo certo. Melhor coisa que aconteceu aqui na cidade.',
      avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    {
      name: 'Elbert Nunes',
      location: 'Predio da Zema',
      rating: 5,
      text: 'Adoro poder pedir comida sem sair de casa, principalmente nos fins de semana. O atendimento é excelente e os preços são justos.',
      avatar: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=150'
    }
  ];

  return (
    <section id="testimonials" className={styles.testimonials}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>
            O que nossos <span className={styles.highlight}>clientes dizem</span>
          </h2>
          <p className={styles.description}>
            Mais de 50.000 pessoas já experimentaram e aprovaram o Rango Já. 
            Veja o que elas estão dizendo sobre nosso serviço.
          </p>
        </div>

        <div className={styles.grid}>
          {testimonials.map((testimonial, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.quote}>
                <Quote className={styles.quoteIcon} />
              </div>
              
              <div className={styles.rating}>
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className={styles.star} />
                ))}
              </div>

              <p className={styles.text}>{testimonial.text}</p>

              <div className={styles.author}>
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.name}
                  className={styles.avatar}
                />
                <div className={styles.authorInfo}>
                  <div className={styles.authorName}>{testimonial.name}</div>
                  <div className={styles.authorLocation}>{testimonial.location}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.stats}>
          <div className={styles.stat}>
            <div className={styles.statNumber}>4.8</div>
            <div className={styles.statLabel}>Avaliação média</div>
          </div>
          <div className={styles.stat}>
            <div className={styles.statNumber}>12k+</div>
            <div className={styles.statLabel}>Avaliações</div>
          </div>
          <div className={styles.stat}>
            <div className={styles.statNumber}>98%</div>
            <div className={styles.statLabel}>Satisfação</div>
          </div>
        </div>
      </div>
    </section>
  );
};
