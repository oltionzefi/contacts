import React from 'react';
import { useTranslation } from 'react-i18next';
import { MessageBar, MessageBarButton, MessageBarType } from 'office-ui-fabric-react';

export const Message: React.SFC<{ status: boolean }> = ({ status }) => {
	const { t } = useTranslation();
	return (
		<MessageBar
			actions={
				<div>
					<MessageBarButton>Yes</MessageBarButton>
					<MessageBarButton>No</MessageBarButton>
				</div>
			}
			messageBarType={status ? MessageBarType.success : MessageBarType.error}
			isMultiline={false}
		>
			{status ? t('contacts.upload.success') : t('contacts.upload.failed')}
		</MessageBar>
	);
};
