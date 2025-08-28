interface ProfileCardProps {
    key: number;
    imagem: string;
    nome: string;
    titulo: string;
    linkGit: string;
}

function ProfileCard({imagem, nome, titulo, linkGit}: ProfileCardProps) {
    return (
        <div className="card">
            <img src={imagem} alt={`Foto do ${nome}`} className="card-img"/>
            <h2>{nome}</h2>
            <p>{titulo}</p>
            <a href={linkGit} target="_blank" className="link">Perfil do GitHub</a>
        </div>
    );
}

export default ProfileCard;