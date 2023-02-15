import { useSelector } from 'react-redux';
import {
  AnimationContainer,
  AnimationLeftX,
  AnimationPage,
  PageTranstition,
} from '../../Animations/Animation';
import { MotionOrderCard } from '../../components/OrderCard/OrderCard';
import { Layout } from '../../Layout/Layout';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

import './OrdersPage.scss';

export const OrdersPage = () => {
  const { t } = useTranslation();
  const { orders } = useSelector((state) => state.orders);

  return (
    <Layout>
      <motion.section
        initial="exit"
        animate="show"
        exit="exit"
        transition={PageTranstition}
        variants={AnimationPage}
        className="orders"
      >
        <div className="container">
          <motion.h2
            variants={AnimationLeftX}
            initial="hidden"
            whileInView={'show'}
            transition={{ duration: 0.5 }}
            className="title__h2"
          >
            {t('orders.title')}
          </motion.h2>
          <motion.div
            className="orders__wrapper"
            variants={AnimationContainer}
            initial="hidden"
            whileInView={'show'}
            viewport={{ once: true }}
          >
            {orders?.map((item, index) => (
              <MotionOrderCard
                variants={AnimationLeftX}
                custom={index}
                key={index}
                {...item}
              />
            ))}
          </motion.div>
        </div>
      </motion.section>
    </Layout>
  );
};
