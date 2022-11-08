import { GithubUser } from "./GithubUser.js";

export class Favorites {
    constructor(root) {
        this.root = document.querySelector(root);
        this.load()
    }
    
    async search(username) {
        const dataCheck = await GithubUser.search(username)
            if (!dataCheck.login) {
                throw new Error('Usuário não encontrado')
            }

        return dataCheck
    }

    add(data) {
        
        const userAlreadyAdded = this.favoriteUsers.find( entry => entry.login === data.login);

        if (userAlreadyAdded) {
            alert('Usuário já existe') 
            return
        }

        this.favoriteUsers.push(data);
        this.save();
        this.load();
    }

    delete(user) {
        const filteredUsers = this.favoriteUsers.filter( (entry) => entry.login !== user.login )
        this.favoriteUsers = filteredUsers;
        this.save();
        this.load();
    }


    load() {
        this.favoriteUsers = JSON.parse(localStorage.getItem('@github-favorites:')) || []
    }

    save() {
        localStorage.setItem('@github-favorites:', JSON.stringify(this.favoriteUsers));
    }

}

export class FavInterface extends Favorites {
    constructor(root) {
        super(root);

        this.tbody = this.root.querySelector('table tbody');

        this.update()
    };

    update() {
        this.removeAllTr();
        this.createUserTable();
    };

    removeAllTr() {
        this.tbody.querySelectorAll('tr')
        .forEach((tr) => {
          tr.remove()
        })
    };

    createUserTable() {
        this.favoriteUsers.forEach( user => {
            
            const row = this.createRow();

            row.querySelector('.user img').src = `https://github.com/${user.login}.png`
            row.querySelector('.user img').alt = `Imagem de ${user.name}`
            row.querySelector('.user a').href = `https://github.com/${user.login}`
            row.querySelector('.user p').textContent = user.name
            row.querySelector('.user span').textContent = user.login
            row.querySelector('.repositories').textContent = user.public_repos
            row.querySelector('.followers').textContent = user.followers;

            row.querySelector('.action button').onclick = () => {
                const isOk = confirm('Tem certeza que deseja remover este usuário?')
                if (isOk) this.delete(user)
                this.update();
            }

            this.tbody.append(row)

        });
    };

    createRow() {
        const tag_tr = document.createElement('tr');

        tag_tr.innerHTML = `
            <tr>
                <td class="user">
                    <img src="" alt="">
                    <a href="" target="_blank">
                        <p></p>
                        <span></span>
                    </a>
                </td>
                <td class="repositories"></td>
                <td class="followers"></td>
                <td class="action"><button>Remover</button></td>
            </tr>
        `

        return tag_tr
    }
}