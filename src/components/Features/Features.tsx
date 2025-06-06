import { Clock, MapPin, CreditCard, Heart, Shield, Headphones } from 'lucide-react';
import styles from './Features.module.css';

export function Features() {
  const features = [
    {
      icon: <Clock />,
      title: 'Entrega Rápida',
      description: 'Entregamos seu pedido em até 30 minutos, direto na sua porta.'
    },
    {
      icon: <MapPin />,
      title: 'Cobertura Local',
      description: 'Atendemos toda a sua cidade com os melhores restaurantes da região.'
    },
    {
      icon: <CreditCard />,
      title: 'Pagamento Fácil',
      description: 'Pague com cartão, PIX ou dinheiro. Do jeito que for melhor pra você.'
    },
    {
      icon: <Heart />,
      title: 'Favoritos',
      description: 'Salve seus pratos preferidos e refaça pedidos com apenas um toque.'
    },
    {
      icon: <Shield />,
      title: 'Seguro & Confiável',
      description: 'Seus dados protegidos e entregas garantidas com total segurança.'
    },
    {
      icon: <Headphones />,
      title: 'Suporte 24/7',
      description: 'Nossa equipe está sempre pronta para te ajudar quando precisar.'
    }
  ];

  return (
    <section id="features" className={styles.features}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>
            Por que escolher o <span className={styles.highlight}>Rango Já?</span>
          </h2>
          <p className={styles.description}>
            Desenvolvido especialmente para atender as necessidades das cidades pequenas,
            com foco na praticidade e na conexão com o comércio local.
          </p>
        </div>

        <div className={styles.grid}>
          {features.map((feature, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.iconWrapper}>
                {feature.icon}
              </div>
              <h3 className={styles.cardTitle}>{feature.title}</h3>
              <p className={styles.cardDescription}>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

