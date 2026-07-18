'use client';
import styles from './Button.module.css';

export default function Button({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  href, 
  onClick, 
  type = 'button',
  disabled = false,
  className = '',
  icon,
  iconPosition = 'left',
  ...props 
}) {
  const classNames = [
    styles.button,
    styles[variant],
    styles[size],
    icon && styles.withIcon,
    disabled && styles.disabled,
    className,
  ].filter(Boolean).join(' ');

  const content = (
    <>
      {icon && iconPosition === 'left' && <span className={styles.icon}>{icon}</span>}
      <span className={styles.label}>{children}</span>
      {icon && iconPosition === 'right' && <span className={styles.icon}>{icon}</span>}
    </>
  );

  if (href) {
    return (
      <a href={href} className={classNames} {...props}>
        {content}
      </a>
    );
  }

  return (
    <button 
      type={type} 
      onClick={onClick} 
      disabled={disabled} 
      className={classNames} 
      {...props}
    >
      {content}
    </button>
  );
}
