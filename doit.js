var jsToCss = require('./index.js')
const fs = require('fs');


const obj = {
	text: {
		marginTop: 20,
		marginBottom: 25,
		fontSize: 16,
		color: '#80808B',
		textAlign: 'center'
	},
	buttonRoot: {
		textAlign: 'center',
		backgroundColor: '#F3A33A',
		textTransform: 'capitalize',
		color: 'white',
		'&:hover': {
			backgroundColor: 'rgba(245, 179, 88, 1)'
		}
	}
}

const css = jsToCss(obj);
try {
  fs.writeFileSync('out.css', css);
  console.log('Done')
} catch (err) {
  console.error(err);
}