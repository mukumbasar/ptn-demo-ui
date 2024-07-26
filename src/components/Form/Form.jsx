import React from 'react';
import styles from './Form.module.css';

const Form = ({ fields, onSubmit, submitButtonLabel = 'Submit' }) => {
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    await onSubmit();
  };

  return (
    <div className={styles.formContainer}>
      <form onSubmit={handleSubmit}>
        {fields.map((field, index) => (
          <input
            key={index}
            type={field.type}
            value={field.value}
            onChange={(e) => field.onChange(e.target.value)}
            placeholder={field.placeholder}
            className={styles.inputField}
          />
        ))}
        <button type="submit" className={styles.submitButton}>
          {submitButtonLabel}
        </button>
      </form>
    </div>
  );
};

export default Form;
