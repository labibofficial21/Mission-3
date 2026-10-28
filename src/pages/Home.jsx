import "../styles/main2.css";
import "../styles/token.css";
import { movieLandscape, moviePortrait, movieUtils } from "../data/moviesData.js";

function Home() {
	// console.log(movieLandscape);

	let dataLandscape = movieLandscape.map((value, index) => {
		return (
			<div className="banner-tag-continue" key={index}>
				<img src={`/images/landscape/${value.fileName}`} alt={value.title} />
				<div>
					<p>
						<b>{value.title}</b>
					</p>
					<p>★ {value.rating}/5</p>
				</div>
			</div>
		);
	});

	let dataPortrait = moviePortrait.map((value, index) => {
		return (
			<div className="banner-tag-continue" key={index}>
				<img src={`/images/portrait/${value.fileName}`} alt={value.title} />
				<div>
					<p>
						<b>{value.title}</b>
					</p>
					<p>★ {value.rating}/5</p>
				</div>
			</div>
		);
	});

	return (
		<>
			<main className="index">
				<nav className="navigation wrapper">
					<ul>
						<li>
							<img src="images/Logo.png" alt="" width="103" height="30" className="logo" />
						</li>
						<li>Series</li>
						<li>Film</li>
						<li>Daftar Saya</li>
					</ul>
					<details className="profile-dropdown">
						<summary>
							<img src="/images/profil.png" alt="Profil" width="48" height="48" className="profile" />
						</summary>
						<ul>
							<li>
								<a href="#">
									<span className="icon">👤</span> Profil Saya
								</a>
							</li>
							<li>
								<a href="#">
									<span className="icon">★</span> Ubah Premium
								</a>
							</li>
							<li>
								<a href="signin.html">
									<span className="icon">⍈</span> Keluar
								</a>
							</li>
						</ul>
					</details>
				</nav>

				<div className="banner">
					<img src="/images/246afe98babc4d30c3cdb9f940b11d577eb50c60.png" alt="" />
					<div className="banner-text wrapper">
						<h1>Duty After School</h1>
						<p>
							Sebuah benda tak dikenal mengambil alih dunia. Dalam keputusasaan, Departemen Pertahanan mulai merekrut lebih banyak tentara, termasuk
							siswa sekolah menengah. Mereka pun segera menjadi pejuang garis depan dalam perang.
						</p>
						<div>
							<button className="btn-primary-contained">
								<b>Mulai</b>
							</button>
							<button className="btn-secondary-outlined">
								<b>Selengkapnya</b>
							</button>
							<button className="btn-secondary-outlined">18+</button>
						</div>
					</div>
				</div>

				<div>
					<section className="wrapper container-section">
						<p>
							<b>Melanjutkan Tonton Film</b>
						</p>
						<div className="carousel-landscape">{dataLandscape}</div>
					</section>

					<section className="wrapper container-section">
						<p>
							<b>Top Rating Film dan Series Hari ini</b>
						</p>
						<div className="carousel-portrait">{dataPortrait}</div>
					</section>

					<section className="wrapper container-section">
						<p>
							<b>Film Trending</b>
						</p>
						<div className="carousel-portrait">{dataPortrait}</div>
					</section>

					<section className="wrapper container-section">
						<p>
							<b>Film Trending</b>
						</p>
						<div className="carousel-portrait">{dataPortrait}</div>
					</section>

					<section className="wrapper container-section">
						<p>
							<b>Rilis Baru</b>
						</p>
						<div className="carousel-portrait">{dataPortrait}</div>
					</section>
				</div>
			</main>
			<footer>
				<div className="footer-container wrapper">
					<section>
						<img src="images/Logo.png" alt="" width="103" height="30" className="logo" />
						<p className="footer-info">@2023 Chill All Rights Reserved.</p>
					</section>
					<section>
						<div>
							<p className="footer-title">
								<b>Genre</b>
							</p>
						</div>
						<div className="footer-genre">
							<p>Aksi</p>
							<p>Anak-anak</p>
							<p>Anime</p>
							<p>Britania</p>
							<p>Drama</p>
							<p>Fantasi Ilmiah & Fantasi</p>
							<p>Kejahatan</p>
							<p>KDrama</p>
							<p>Komedi</p>
							<p>Petualangan</p>
							<p>Perang</p>
							<p>Romantis</p>
							<p>Sains & Alam</p>
							<p>Thriller</p>
						</div>
					</section>
					<section>
						<div>
							<p className="footer-title">
								<b>Bantuan</b>
							</p>
						</div>
						<div className="footer-help">
							<p>FAQ</p>
							<p>Kontak Kami</p>
							<p>Privasi</p>
							<p>Syarat & Ketentuan</p>
						</div>
					</section>
				</div>
			</footer>
		</>
	);
}

export default Home;
