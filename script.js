const c = document.getElementById('canvas').getContext('2d')

c.fillStyle = 'black'
c.strokeRect(0, 0, 500, 400)

c.fillStyle = 'blue'
c.fillRect(10, 10, 480, 380)

c.fillStyle = 'orange'
c.font = 'small-caps bold 24px sans-serif'
c.textAlign = 'center'
c.fillText('Salaam code hackerz!', 250, 200)
