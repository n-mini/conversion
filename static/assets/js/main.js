new Vue({
    el: '#app',
    delimiters: ['[|[', ']|]'],
    data: {
        numbers: null,
        binary: null,
        base: null,
        octal: null,
        duodenary: null,
        hexadecimal: null,
    },
    methods: {
        calc: function (event) { //ボタンが押された時
            if (this.numbers > 0){
                var numbers =  parseInt(numbers)
                this.binary = this.numbers.toString(2)
                this.base = this.numbers.toString(3)
                this.octal = this.numbers.toString(8)
                this.duodenary = this.numbers.toString(12).toUpperCase()
                this.hexadecimal = this.numbers.toString(16).toUpperCase()
            }
        },

    },
})
