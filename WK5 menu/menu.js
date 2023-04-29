class Member {
    constructor(name, role) {
        this.name = name;
        this.role = role;
    }

    describe() {
        return `${this.name} is the ${this.role}!`;
    }
}

class Group {
    constructor(name) {
        this.name = name;
        this.members = [];
    }

    addMember(member) {
        if (member instanceof Member) {
            this.members.push(member);
        } else {
            throw new Error(`You can only add a member. Argument is not a member: ${member}`);
        }
    }

    describe() {
        return `${this.name} has ${this.members.length} members.`;
    }
}

class Menu {
    constructor() {
        this.groups = [];
        this.selectedGroup = null;
    }

    start() {
        let selection = this.showMainMenuOptions();
        while (selection !=0) {
            switch (selection) {
                case '1':
                    this.createGroup();
                    break;
                case '2':
                    this.viewGroup();
                    break;
                case '3':
                    this.deleteGroup();
                    break;
                case '4':
                    this.displayGroups();
                    break;
                default:
                    selection = 0;
            }

            selection = this.showMainMenuOptions();
        }
        alert('안녕!');
    }

    showMainMenuOptions() {
        return prompt(`
            0) exit
            1) create new group 
            2) view group
            3) delete group
            4) display all groups
        `);
    }

    showGroupMenuOptions(groupInfo) {
        return prompt(`
            0) back
            1) create member
            2) delete member
        `);
        }

    displayGroups() {
        let groupString = '';
        for (let i = 0; i < this.groups.length; i++) {
            groupString += i + ')' + this.groups[i].name + '\n';
        }

        alert(groupString);
    }

    createGroup() {
        let name = prompt('Enter new group name:');
        this.groups.push(newGroup(name));
    }

    viewGroup() {
        let index = prompt('Enter the group you wish to view:');
        if (index > -1 && index < this.groups.length) {
            this.selectedGroup = this.groups[index];
            let description = 'Group Name: ' + this.selectedGroup.name + '\n';

        for (let i = 0; i < this.selectedGroup.members.length; i++) {
            ' - ' + this.selectedGroup.members[i].role + '\n';
        }
        }

        let selection = this.showGroupMenuOptions(description);
        switch(selection) {
            case '1':
                this.createMember();
                break;
            case '2':
                this.deleteMember();
                break;
        }
    }
}

let menu = new Menu();
menu.start();



