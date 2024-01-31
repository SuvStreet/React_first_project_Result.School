import logo from './logo.svg'
import './App.css'
import React from 'react'

export const App = () => {
	// императивный стиль, описываем какая структура HTML должна вернуться.
	// А далее декларативный стиль, мы просто описываем,
	// что хотим получить на каждой строчке с помощью React.createElement,
	// не задумываясь как он будет это создовать элемент, распологать
	return React.createElement(
		'div',
		{ className: 'App' },
		React.createElement(
			'header',
			{ className: 'App-header' },
			React.createElement('img', {
				src: logo,
				className: 'App-logo',
				alt: 'logo',
			}),
			React.createElement(
				'p',
				null,
				'Edit ',
				React.createElement('code', null, 'src/App.js'),
				' and save to reload 2.',
			),
			React.createElement(
				'a',
				{
					className: 'App-link',
					href: 'https://reactjs.org',
					target: '_blank',
					rel: 'noopener noreferrer',
				},
				'Learn React',
			),
			React.createElement('p', null, new Date().getFullYear()),
		),
	)
}
