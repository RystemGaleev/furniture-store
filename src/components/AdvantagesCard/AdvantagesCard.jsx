import { motion } from 'framer-motion';
import { forwardRef } from 'react';
import style from './AdvantagesCard.module.scss';

export const AdvantagesCard = forwardRef(({ title, icon }, ref) => {
  return (
    <motion.div ref={ref} className={style.card}>
      <div className={style.title}>{title}</div>
      <div className={style.icon}>{icon}</div>
    </motion.div>
  );
});
export const MotionAdvantagesCard = motion(AdvantagesCard);
