class ListBuilder {
    constructor(list){
        this.list = list || []
    }

    createList(total) {
        const createListFor = key => {
            for (let i = 1; i <= total; i++) {
                this.list.push({id: i, key: `${key}-${i}`, name: `carta ${i}`, flipped: false, hasMatch: false,})
            }
        }

        createListFor(1)
        createListFor(2)

        return this
    }

    shuffle(){
        const newList = this.list.slice()
        for (let i = newList.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i+1));
            [newList[i], newList[j]] = [newList[j], newList[i]] 
        }

        this.list = newList
        return this
    }

    build() {
        return this.list
    }
}

export default ListBuilder