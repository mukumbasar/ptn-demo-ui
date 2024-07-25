import React from 'react'

const LoginForm = () => {
  return (
    <div className={styles.formContainer}>
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    handleLogin();
                }}
            >
                <input 
                    type="text" 
                    value={username} 
                    onChange={(e) => setUsername(e.target.value)} 
                    placeholder="Username" 
                    className={styles.inputField}
                />
                <input 
                    type="password" 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)} 
                    placeholder="Password" 
                    className={styles.inputField}
                />
                <button type="submit" className={styles.submitButton}>Log In</button>
                <button type="button" className={styles.submitButton} onClick={handleRegisterNavigation}>Register</button>
                {loginError && <p className={styles.errorMessage}>{loginError}</p>}
            </form>
        </div>
  )
}

export default LoginForm