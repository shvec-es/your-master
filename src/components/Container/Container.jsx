import s from './Container.module.css';

export default function Container({ children, className = '' }) {
  return <div className={`${s.container} ${className}`}>{children}</div>;
}
