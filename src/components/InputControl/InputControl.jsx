import style from './InputControl.module.scss';

export const InputControl = (props, type) => {
  return (
    <div className={style.block}>
      <label htmlFor={props.label}>{props.label}</label>
      <input type={type} name={props.label} className={style.input} {...props} />
    </div>
  );
};
