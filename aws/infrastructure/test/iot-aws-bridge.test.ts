import { expect as expectCDK, matchTemplate, MatchStyle } from '@aws-cdk/assert';
import * as cdk from '@aws-cdk/core';
import * as IotAwsBridge from '../lib/iot-aws-bridge-stack';

test('Empty Stack', () => {
    const app = new cdk.App();
    // WHEN
    const stack = new IotAwsBridge.IotAwsBridgeStack(app, 'MyTestStack');
    // THEN
    expectCDK(stack).to(matchTemplate({
      "Resources": {}
    }, MatchStyle.EXACT))
});