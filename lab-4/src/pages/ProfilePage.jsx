import PageWrapper from "../components/layouts/PageWrapper";
import ProfileCardCSS from "../components/profile/ProfileCardCSS";
import ProfileCardTailwind from "../components/profile/ProfileCardTailwind";
import ControlledInput from "../components/inputs/ControlledInput";
import UncontrolledInput from "../components/inputs/UncontrolledInput";

function ProfilePage() {
  return (
    <PageWrapper>
      <ProfileCardCSS
        name="John Doe"
        bio="Frontend developer focused on scalable UI architecture."
      />

      <ProfileCardTailwind
        name="Jane Smith"
        bio="UI engineer who loves fast and consistent design systems."
      />

      <ControlledInput />
      <UncontrolledInput />
    </PageWrapper>
  );
}

export default ProfilePage;
