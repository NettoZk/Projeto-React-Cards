import './App.css';
import ProfileCard from './components/ProfileCard';

function App() {

    const profileData = [
        {
            id: 1,
            imagem: 'https://avatars.githubusercontent.com/u/130375368?v=4',
            nome: 'Adeuvaldo Neto Fernandes Paiva',
            titulo: 'O melhorzin que tá tendo',
            linkGit: 'https://github.com/NettoZk',
        },
        {
            id: 2,
            imagem: 'https://avatars.githubusercontent.com/u/145223210?v=4',
            nome: 'Danilo Fernandes Araujo Gama',
            titulo: 'O cara do Guardiões da galáxia',
            linkGit: 'https://github.com/DaniloFernanades',
        },
        {
            id: 3,
            imagem: 'https://avatars.githubusercontent.com/u/199000141?v=4',
            nome: 'Willian Peres',
            titulo: 'O carinha do Hot Wheels',
            linkGit: 'https://github.com/araguaa',
        },
    ];

    return (
        <div className='App'>
            <h1>Atividade de Cards usando React</h1>
            <div className='profiles-container'>
                {profileData.map(profile => (
                    <ProfileCard
                    key={profile.id}
                    nome={profile.nome}
                    titulo={profile.titulo}
                    imagem={profile.imagem}
                    linkGit={profile.linkGit}
                />
                ))}
            </div>
        </div>
    );
}

export default App;