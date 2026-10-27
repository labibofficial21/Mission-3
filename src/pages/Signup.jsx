import { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/main2.css";
import "../styles/token.css";
import logo from "../images/Logo.png";
import iconGoogle from "../images/icon_google.png";

function Signup() {
	const [form, setForm] = useState({ username: "", password: "", confirmPassword: "" });

	const handleForm = () => {
		console.log("Data sudah terkirim!", form);
	};

	return (
		<>
			<main className="signup">
				<div className="container-card">
					<img src={logo} alt="" width="163" height="44" className="logo" />
					<h2>Daftar</h2>
					<p>Selamat datang!</p>

					<form action="" className="child-card">
						<label htmlFor="username">
							Username <input type="text" name="username" id="username" placeholder="Masukkan username" value={form.username} />
						</label>
						<label htmlFor="password">
							Kata Sandi
							<input type="password" name="password" id="password" placeholder="Masukkan kata sandi" value={form.password} />
						</label>
						<label htmlFor="confirmPassword">
							Konfirmasi Kata Sandi
							<input type="password" name="confirmPassword" id="confirmPassword" placeholder="Masukkan kata sandi" value={form.confirmPassword} />
						</label>
						<p>
							Sudah punya akun? <Link to="/signin">Login</Link>
						</p>

						<div className="child-button">
							<button type="button" onClick={handleForm}>
								Daftar
							</button>
							<p>Atau</p>
							<button type="button">
								<img src={iconGoogle} alt="icon google" width="18" height="18" />
								Daftar dengan Google
							</button>
						</div>
					</form>
				</div>
			</main>
		</>
	);
}

export default Signup;
