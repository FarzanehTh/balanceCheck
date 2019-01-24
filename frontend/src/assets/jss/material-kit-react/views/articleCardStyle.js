const articleStyle={
  
/* * :{
    boxSizing: "border-box"
  }, */
  
  body: {
    background: '#f1f1f1',
    margin: '2rem'

  },
  
  blogCard: {
    display: 'flex',
    flexDirection: 'column',
    margin: '1rem auto',
    boxShadow: '0 3px 35px -1px rgba(0, 0, 0, 0.1)',
    marginBottom: '1.6%',
    background: '#fff',
    lineHeight: '1.4',
    fontFamily: 'sans-serif',
    borderRadius: '5px',
    overflow: 'hidden',
    zIndex: '0',
    height: '200px'
  },
  
  
  circle : {
    backgroundColor: 'rgba(253, 49, 49, 0.582)',
    borderRadius:'40px',
    height: '20px',
    width: '150px',
    position: 'relative',
    left:'10px'
  },
  
  
  number: {
    position:'relative',
    top:'1px',
    fontSize: '15px',
    zIndex: '5',
    color: '#696969',
    textAlign:'center',
    padding:'5px'
  },

  'a' :{
    color: '#e02121',
    '&:hover': {
      color:' rgba(150, 2, 2, 0.808)',
     
    }
  },
  
  
  description: {
    padding: '1rem',
    background: '#fff',
    position: 'relative',
    zIndex: '1',
    height:'175px',
    
  },
  
  'h1,h2':{
    fontFamily: 'Poppins, sans-serif'
    
  },
ratingText:{
  position:'relative'
},
h1: {
    lineHeight: '1',
    margin: '0',
    fontSize: '1.6rem',
    fontWeight: '300'
    
  },
  
  h2: {
    fontSize: '0.9rem',
    fontWeight: '300',
    textTransform: 'uppercase',
    color: '#000000',
    marginTop: '5px'
    
  },

  date: {
    fontWeight: '500',
    paddingLeft: '15px'
  },

  readMore: {
    textAlign: 'right',
    color: '#e02121'
  },

  '@media (min-width: 640px)': {
    blogCard: {
      flexDirection: 'row',
      maxWidth: '700px'
    },
  
    description: {
      flexBasis: '75%',
    }
  
    

  }
};
export default articleStyle;