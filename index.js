import React from 'react'
import { render } from 'react-dom'
import App from './components/app'
import Form from './components/form'

render(
<div>
<App name='form-validation-react' />
<Form />
</div>
, document.querySelector('main'))
console.log('welcome to form-validation-react')
