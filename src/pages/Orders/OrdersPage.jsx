import { useSelector } from 'react-redux';
import { textAnimation } from '../../Animations/Animation';
import { OrderCard } from '../../components/OrderCard/OrderCard';
import { Layout } from '../../Layout/Layout';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

import './OrdersPage.scss';

export const OrdersPage = () => {
  const { t } = useTranslation();
  const { orders } = useSelector((state) => state.orders);

  return (
    <Layout>
      <section className="orders">
        <div className="container">
          <motion.h2
            variants={textAnimation}
            initial="hidden"
            whileInView="visible"
            className="title__h2"
          >
            {t('orders.title')}
          </motion.h2>
          <div className="orders__wrapper">
            {orders?.map((item, index) => (
              <OrderCard key={index} {...item} />
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};
