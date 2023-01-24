import { motion } from 'framer-motion';
import { Layout } from '../../Layout/Layout';

export const ErrorPage = () => {
  return (
    <Layout>
      <motion.section
        className="Error"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <div className="container">ErrorPage</div>
      </motion.section>
    </Layout>
  );
};
