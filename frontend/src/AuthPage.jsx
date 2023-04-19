import axios from 'axios'

const AuthPage = (props) => {
    const onSubmit = (e) => {
      e.preventDefault();
      const { value } = e.target[0];
      axios.post(
        'http://localhost:3001/autheticate',
        {username: value}
        )
        .then (r => props.onAuth({ ...r.data, secret: value }))
        .catch(e => console.log('error', e))
    };
  
    return (
      <div className="background">
        <form onSubmit={onSubmit} className="form-card">
          <div className="form-title">Bem vindo 👋</div>
  
          <div className="form-subtitle">Crie um usuário para começar</div>
  
          <div className="auth">
            <div className="auth-label">Usuário</div>
            <input className="auth-input" name="username" />
            <button className="auth-button" type="submit">
              Enter
            </button>
          </div>
        </form>
      </div>
    );
  };
  
  export default AuthPage;