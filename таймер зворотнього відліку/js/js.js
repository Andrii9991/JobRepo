let stopTime

const input = document.getElementById('input-date')
input.value = ''

input.oninput = () =>// якщо ми вибиримо дату в тезі 'input' за допомогою методу 'oninput'  буде спрацьовувати стрілочна функція
{
    if ( Date.parse( input.value ) > Date.parse( new Date() ) )// цей код спрауьовує коли ми вибираєм дату яка більша за сьогоднішню
    {
        document.querySelector( '.input-date-block p' ).innerHTML = input.value //за допомогою властивості звертаємось до 'p' та кажем що р = тій даті

        clearInterval ( stopTime )

        timeFun( input.value )

    }
    

}

secondsFun = ( total ) =>
{
    const seconds = Math.floor( ( total / 1000 ) % 60 )

    const sb = document.getElementById('seconds')

    sb.querySelector( 'div ul li:nth-child(1)' ).innerHTML = ('0' + seconds).slice(-2)//джуе цікаво що ми тут зввертаємось до першої лішки через чайлд

    let s = 100 - (( 100/60 ) * seconds )
    
    if ( seconds === 0 ) s = 0

    sb.style.background = `conic-gradient( #02c2c2 0 $( s )%, #303238 $(s)% 100% )`;
}


minutesFun = ( total ) =>
{
    const minutes = Math.floor(( total / 1000 /60 ) % 60 )

    const mb = document.getElementById( 'minutes' )

    mb.querySelector( 'div ul li:nth-child( 1)').innerHTML = ('0' + minutes ).slice(-2)

    let m = 100 - ( ( 100/60 ) * minutes )

    if ( minutes === 0 ) m = 0

    mb.style.background = `conic-gradient( #02c2c2 0 $( s )%, #303238 $(s)% 100% )`;
}


hoursFun = ( total ) =>
{
   const hours = Math.floor(( total / (1000 * 60 * 60 ) ) % 24 )

   const hb = document.getElementById( 'hourse' )

   hb.querySelector('div ul li:nth-child( 1 )').innerHTML = (  '0' + hours ).slice( -2 )
   
   let h = 100 - ( (  100 / 24 ) * hours )

   if ( hours === 0 ) h = 0

   hb.style.background = `conic-gradient( #02c2c2 0 $( s )%, #303238 $(s)% 100% )`;
}

daysFun = ( total ) =>
{
   const days = Math.floor(  total / ( 1000 * 60 * 60 * 24 ) )

   const db = document.getElementById( 'days' )

   db.querySelector('div ul li:nth-child( 1 )').innerHTML = (  '0' + days ).slice( -2 )
   
   let d = 100 / days

   if ( days === 0 ) d = 0

   db.style.background = `conic-gradient( #02c2c2 0 $( s )%, #303238 $(s)% 100% )`;
}











timeFun = endtime =>
{
    intervalFun = () =>
    {
        const total = Date.parse( endtime ) - Date.parse( new Date() )//тут ми віднімаєм від даати яку вибрали дату яка зараз є в даний моммент

        secondsFun( total )
        minutesFun( total )
        hoursFun( total )
        daysFun( total )

        if ( total <= 0  ) clearInterval( stopTime )//якщо змінна дорівнює нулю або ж менша заа нуль також зупиняємо час


    }

    intervalFun()

    stopTime = setInterval( intervalFun, 1000 )
}