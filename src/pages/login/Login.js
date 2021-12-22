import React,{useState} from 'react'
import { FormContainer, Header, LoginContainer, StyledButton, StyledForm, StyledImg, StyledInput } from './LoginStyles'
import mealSvg from "../../assets/meal.svg"
const Login = () => {
    const [name, setName] = useState("YUSUF");
    const [password, setPassword] = useState(5249)
    const handleSubmit = (event) => {
        event.preventDefault();
        if (name === "YUSUF" && password===5249) {
            window.location.href = "/"
        } else {
            alert("Kullanıcı Adı yada Parola Hatası")
            
        }
        
    }
    return (
        <LoginContainer>
            <FormContainer>
                <StyledImg src={mealSvg} />
                <Header>{"<Clarusway/>"}Recipe</Header>
                <StyledForm onSubmit={handleSubmit}>
                    <StyledInput value={name} onChange={(e)=>setName(e.target.value)} type="text" placeholder="username" required />
                    <StyledInput value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="password" required />
                    <StyledButton type="submit">Login</StyledButton>
                </StyledForm>
            </FormContainer>
        </LoginContainer>
    )
}
export default Login
