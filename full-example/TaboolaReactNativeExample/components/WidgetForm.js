import React, { Component } from 'react';
import { View, ScrollView, Button } from 'react-native';
import PropTypes from 'prop-types';
import Widget from './Widget';
import CustomTextInput from './CustomTextInput';
import Label from './styles/Label';
import BackButton from './styles/BackButton';
import SubmitButton from './styles/SubmitButton';
import Header from './styles/Header';

const initialWidgetParams = {
	publisher: '',
	mode: '',
	placement: '',
	pageUrl: '',
	pageType: 'article',
	targetType: 'mix',
};

class WidgetForm extends Component {
	static propTypes = {
		back: PropTypes.func.isRequired,
	};

	state = {
		widgetParams: { ...initialWidgetParams },
		widget: null,
	};

	buttonDisabled() {
		const vals = Object.values(this.state.widgetParams);
		return vals.some(val => !val);
	}

	setWidgetParam(param) {
		this.setState(prevState => {
			return {
				...prevState,
				widgetParams: {
					...prevState.widgetParams,
					...param,
				},
			};
		});
	}

	render() {
		const {
			publisher,
			mode,
			pageType,
			pageUrl,
			placement,
			targetType,
		} = this.state.widgetParams;

		return (
			<View>
				<ScrollView>
					<BackButton onPress={e => this.props.back()} title="Back" />
					{this.state.widget && (
						<>
							<Header>Here's your widget!</Header>
							<ScrollView>{this.state.widget}</ScrollView>
						</>
					)}
					<Label>Publisher</Label>
					<CustomTextInput
						value={publisher}
						onChangeText={text => this.setWidgetParam({ publisher: text })}
						placeholder="sdk-tester"
					/>
					<Label>Mode</Label>
					<CustomTextInput
						value={mode}
						onChangeText={text => this.setWidgetParam({ mode: text })}
						placeholder="thumbnails-a"
					/>
					<Label>Placement</Label>
					<CustomTextInput
						value={placement}
						onChangeText={text => this.setWidgetParam({ placement: text })}
						placeholder="Mid Article"
					/>
					<Label>Example Page Url</Label>
					<CustomTextInput
						value={pageUrl}
						onChangeText={text => this.setWidgetParam({ pageUrl: text })}
						placeholder="https://blog.taboola.com"
					/>
					<Label>Page Type</Label>
					<CustomTextInput
						value={pageType}
						onChangeText={text => this.setWidgetParam({ pageType: text })}
						placeholder="article"
					/>
					<Label>Target Type</Label>
					<CustomTextInput
						value={targetType}
						onChangeText={text => this.setWidgetParam({ targetType: text })}
						placeholder="targetType"
					/>
					<SubmitButton
						disabled={this.buttonDisabled()}
						onPress={e =>
							this.setState({ widget: null }, () => {
								this.setState(prevState => {
									return {
										widgetParams: { ...initialWidgetParams },
										widget: (
											<Widget
												{...prevState.widgetParams}
											/>
										),
									};
								});
							})
						}
						title="Submit"
					/>
				</ScrollView>
			</View>
		);
	}
}

export default WidgetForm;
