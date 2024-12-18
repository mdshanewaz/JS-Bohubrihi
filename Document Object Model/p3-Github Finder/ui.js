class UI {
    constructor() {
        this.profile = document.querySelector('#profile'); 
    }

    showProfile(user) {
        this.clearAlert();
        this.profile.innerHTML = `
            <div class="card card-body mb-3">
                <div class="row">
                    <div class="col-md-3">
                        <img class="img-fluid mb-2" src="${user.avatar_url}">
                        <a href="${user.html_url}" target="_blank" class="btn btn-primary btn-block mb-4">View Profile</a>
                    </div>
                    <div class="col-md-9">
                        <span class="badge badge-primary text-bg-secondary p-2">Public Repos: ${user.public_repos}</span>
                        <span class="badge badge-secondary text-bg-secondary p-2">Public Gists: ${user.public_gists}</span>
                        <span class="badge badge-success text-bg-secondary p-2">Followers: ${user.followers}</span>
                        <span class="badge badge-info text-bg-secondary p-2">Following: ${user.following}</span>
                        <br><br>
                        <ul class="list-group">
                            <li class="list-group-item">Company: ${user.company}</li>
                            <li class="list-group-item">Website/Blog: ${user.blog}</li>
                            <li class="list-group-item">Location: ${user.location}</li>
                            <li class="list-group-item">Member Since: ${user.created_at}</li>
                        </ul>
                    </div>
                </div>
            </div>
        `;
    }

    clearprofile() {
        this.profile.innerHTML = '';
    }

    showAlert(message, className) {
        this.clearAlert();
        this.clearprofile();
        let div = document.createElement('div');
        div.classList = className;
        div.appendChild(document.createTextNode(message));
        let container = document.querySelector('.searchContainer');
        let search = document.querySelector('.search');
        container.insertBefore(div, search);
    }

    clearAlert() {
        let currentAlert = document.querySelector('.alert');
        if(currentAlert) {
            currentAlert.remove();
        }
    }
}