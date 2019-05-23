import React from 'react';
import { View, ScrollView, FlatList } from 'react-native';
import PropTypes from 'prop-types';
import Widget from './Widget';
import BackButton from './styles/BackButton';
import StyledText from './styles/StyledText';
import Header from './styles/Header';

const ArticleWithWidgetInFlatList = props => {
	const p1 = (
		<StyledText key="p1">
			Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
			tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
			veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
			commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
			velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
			cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
			est laborum.
		</StyledText>
	);

	const p2 = (
		<StyledText key="p2">
			Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
			doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo
			inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
			Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
			fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem
			sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit
			amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora
			incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad
			minima veniam, quis nostrum exercitationem ullam corporis suscipit
			laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum
			iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae
			consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
		</StyledText>
	);
	return (
		<View>
			<BackButton onPress={e => props.back()} title="Back" />
			<ScrollView>
				<Header>Here's a Taboola Widget</Header>
				<FlatList
					style={{ flex: 1 }}
					data={[{ key: 'p1' }, { key: 'p2' }, { key: 'taboola' }]}
					renderItem={({ item }) => {
						switch (item.key) {
							case 'p1':
								return p1;
							case 'p2':
								return p2;
							case 'taboola':
								return <Widget />;
							default:
								return null;
						}
					}}
				/>
			</ScrollView>
		</View>
	);
};

ArticleWithWidgetInFlatList.propTypes = { back: PropTypes.func.isRequired };

export default ArticleWithWidgetInFlatList;
