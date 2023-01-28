import { useSelector } from 'react-redux';
import { textAnimation } from '../../Animations/Animation';
import { OrderCard } from '../../components/OrderCard/OrderCard';
import { Layout } from '../../Layout/Layout';
import { motion } from 'framer-motion';
import './OrdersPage.scss';

export const OrdersPage = () => {
  const { orders } = useSelector((state) => state.orders);
  console.log(orders);

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
            Orders page
          </motion.h2>
          <div className="orders__wrapper">
            {orders?.map((item) => (
              <OrderCard key={item.id} {...item} />
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};
