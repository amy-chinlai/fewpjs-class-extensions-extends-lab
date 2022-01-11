class Polygon {
    constructor(array) {
        this.array = array
    }

    get countSides() {
       return this.array.length
    }

    get perimeter() {
        return this.array.reduce(function(acc, e){return e + acc})
    }
}

class Triangle extends Polygon {
    get isValid() {
        let side1 = this.array[0]
        let side2 = this.array[1]
        let side3 = this.array[2]

        return ((side1 + side2 > side3) && (side1+side3 > 2) && (side2 + side3 > side1))
    }
}

class Square extends Polygon {
    get isValid() {
        if (this.array[0] == this.array[1] && this.array[1] == this.array[2] && this.array[2] == this.array[3]) {
            return true
        }
        else {
            return false
        }
    }

    get area() {
        return this.array[0] * this.array[1]
    }
}