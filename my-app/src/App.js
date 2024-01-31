import logo from './logo.svg'
import './App.css'

export const App = () => {
	// императивный стиль, описываем какая структура HTML должна вернуться
	return (
		// декларативный стиль, мы просто описываем,
		// что хотим получить на каждой строчке,
		// не задумываясь о пикселях, о свойстве className и т.д.
		<div className='App'>
			<header className='App-header'>
				<img src={logo} className='App-logo' alt='logo' />
				<p>
					Edit <code>src/App.js</code> and save to reload 2.
				</p>
				<a
					className='App-link'
					href='https://reactjs.org'
					target='_blank'
					rel='noopener noreferrer'
				>
					Learn React
				</a>
				<p>{new Date().getFullYear()}</p>
			</header>
		</div>
	)
}
